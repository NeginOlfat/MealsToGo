import React, { createContext, useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San francisco");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(null);

  const onSearch = (searchKeyword) => {
    setLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLocation(result);
        setLoading(false);
        setError(false);
      })
      .catch((er) => {
        setLoading(false);
        setError(er);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        location,
        keyword,
        loading,
        error,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

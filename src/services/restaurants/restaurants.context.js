import React, { createContext, useState, useEffect, useContext } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const { location } = useContext(LocationContext);
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const retrieveRestaurants = (loc) => {
        setLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            restaurantsRequest(loc)
                .then(restaurantsTransform)
                .then((result) => {
                    setLoading(false);
                    setRestaurants(result);
                }).catch((er) => {
                    setLoading(false);
                    setError(er);
                });
        }, 2000);
    }

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location])

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                loading,
                error
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    )
}

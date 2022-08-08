import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {

    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem("@Favourites", jsonValue)
        } catch (e) {
            console.log("error storing ", e)
        }
    }

    const loadFavourites = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("@Favourites")
            if (jsonValue) {
                setFavourites(JSON.parse(jsonValue))
            }
        } catch (e) {
            console.log("error loading ", e)
        }
    }

    useEffect(() => {
        loadFavourites();
    }, []);

    useEffect(() => {
        saveFavourites(favourites);
    }, [favourites]);

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    }

    const remove = (restaurant) => {
        const newFavourites = favourites.filter((x) => x.placeId !== restaurant.placeId);
        setFavourites(newFavourites);
    }

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove
            }}
        >
            {children}
        </FavouritesContext.Provider>
    )
};

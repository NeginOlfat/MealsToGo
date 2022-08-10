import React, { useState, createContext } from "react";
import firebase from "firebase/compat";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password).then((u) => {
            setIsLoading(false);
            setUser(u);
        }).catch((e) => {
            setIsLoading(false);
            setError(e)
        })
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}

import React, { useState, createContext } from "react";
import { loginRequest, registerRequest } from "./authentication.service";
import firebase from "firebase/compat";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    firebase.auth().onAuthStateChanged((usr) => {
        if (usr) {
            setUser(usr);
            setIsLoading(false);
        } else
            setIsLoading(false)
    })

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password).then((u) => {
            setIsLoading(false);
            setUser(u);
        }).catch((e) => {
            setIsLoading(false);
            setError(e.toString())
            console.log(e)
        })
    };

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        if (password !== repeatedPassword) {
            setIsLoading(false);
            setError("Error: password do not match");
            return;
        }
        registerRequest(email, password)
            .then((u) => {
                setIsLoading(false);
                setUser(u);
            }).catch((e) => {
                setIsLoading(false);
                setError(e.toString())
                console.log(e)
            })
    }

    const onLogout = () => {
        firebase.auth().signOut().then(() => {
            setUser(null);
            setError(null);
        })
    }

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}

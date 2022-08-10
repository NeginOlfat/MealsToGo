import React from "react";
import firebase from "firebase/compat";

export const loginRequest = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

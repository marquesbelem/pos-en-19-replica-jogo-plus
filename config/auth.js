import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit-icons.min.js"
import "uikit/dist/js/uikit.min.js"

import React, { useEffect, useState, useContext, createContext } from 'react'
import firebase from "./firebase-client"
import "firebase/auth"
import nookies from "nookies"

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        return firebase.auth().onIdTokenChanged(async (userData) => {
            if(!userData) 
            {
                setUser(null);
                nookies.set(undefined, "token", "", {});
                return;
            }

            const token = await userData.getIdToken();
            setUser(userData);
            nookies.set(undefined, "token", token, {});
        })
    },[])

    return (
        <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
        );
};

export const useAuth = () => useContext(AuthContext);
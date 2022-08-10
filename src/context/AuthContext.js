import React  from "react";
import { createContext } from 'react';
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

const initialAuthState = {
    id: '',
    username: '',
    token: '',
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = (authData) => {
        setUser(authData);
        console.log(authData);
    };

    const logout = () => {
        setUser( initialAuthState);
    };

  
    return (
        <AuthContext.Provider value={{ login, user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


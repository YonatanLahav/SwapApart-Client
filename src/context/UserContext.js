import React, { useState, useEffect, createContext } from 'react';
import { login, fetchData } from '../utils/auth';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const handleLogin = async (email, password) => {
        login(email, password)
            .then((token) => setToken(token));
        const respo = await fetchData(token)
        setUserData(respo)
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <UserContext.Provider value={{ token, handleLogin, handleLogout, userData }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;

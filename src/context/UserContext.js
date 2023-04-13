import React, { useState, useEffect, createContext } from 'react';
import { login, register } from '../utils/auth';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const handleLogin = async (email, password) => {
        const res = await login(email, password);
        setToken(res);
        return res;
    };

    const handleRegister = async (user) => {
        const res = await register(user);
        setToken(res);
        return res;
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <UserContext.Provider value={{ token, handleLogin, handleLogout, handleRegister }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;

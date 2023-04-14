import React, { useState, useEffect, createContext } from 'react';
import { login, register, fetchData, updateData } from '../utils/auth';

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
        const res = await login(email, password);
        setToken(res);
        const respo = await fetchData(res)
        setUserData(respo)
        return res;
    };

    const handleRegister = async (user) => {
        const res = await register(user);
        setToken(res);
        return res
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    const handleUserUpdate = async (tok, updatedData) => {
        const res = await updateData(tok, updatedData);
        setUserData(res);
    };

    return (

        <UserContext.Provider value={{ token, handleLogin, handleLogout, handleRegister, userData, handleUserUpdate }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;

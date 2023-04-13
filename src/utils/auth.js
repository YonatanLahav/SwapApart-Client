import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (email, password) => {
    try {
        const response = await api.post('/login', { email, password });
        const { token } = response.data;
        console.log(token)
        localStorage.setItem('token', token); // Store token in local storage
        return token;
    } catch (error) {
        console.error(error);
        return null;
    }
};
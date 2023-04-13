import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAllUsers = async () => {
    const response = await api.get('/users', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data
};

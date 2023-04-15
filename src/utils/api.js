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

export const getPlans = async (token) => {
    const res = await api.get('/plans', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res.data;
};

export const addVacation = async (token, vacation) => {
    try {
        const response = await api.post('/plans', vacation, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            responseType: 'json'
        });
        const usersData = JSON.stringify(response.data);
        return usersData
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const getOptionalMatchs = async (token, plan) => {
    const res = await api.get('/plans/optional/' + plan, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res.data;
};

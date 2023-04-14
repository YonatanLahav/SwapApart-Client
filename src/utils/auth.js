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
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const register = async (user) => {
    try {
        const response = await api.post('/register', user);
        const { token } = response.data;
        console.log(token)
        localStorage.setItem('token', token); // Store token in local storage
        return token;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const fetchData = async (token) => {
    try {
      const response = await api.get('/api/users', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        responseType: 'json'
      });
      const usersData  = JSON.stringify(response.data);
      return usersData
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  export const updateData = async (token, userChanges) => {
    try {
      const response = await api.put('/api/users', userChanges, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        responseType: 'json'
      });
      const usersData  = JSON.stringify(response.data);
      return usersData
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  

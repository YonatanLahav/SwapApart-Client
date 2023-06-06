import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Performs user login.
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 * @returns {Promise} Resolves to the authentication token.
 */
export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    const { token } = response.data;
    console.log(token);
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Registers a new user.
 * @param {object} user - User data.
 * @returns {Promise} Resolves to the authentication token.
 */
export const register = async (user) => {
  try {
    const response = await api.post('/register', user);
    const { token } = response.data;
    console.log(token);
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Fetches data using the provided token.
 * @param {string} token - Authentication token.
 * @returns {Promise} Resolves to the fetched data.
 */
export const fetchData = async (token) => {
  try {
    const response = await api.get('/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      responseType: 'json'
    });
    const usersData = JSON.stringify(response.data);
    return usersData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Updates user data using the provided token and user changes.
 * @param {string} token - Authentication token.
 * @param {object} userChanges - Updated user data.
 * @returns {Promise} Resolves to the updated user data.
 */
export const updateData = async (token, userChanges) => {
  try {
    const response = await api.put('/api/users', userChanges, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      responseType: 'json'
    });
    const usersData = JSON.stringify(response.data);
    return usersData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

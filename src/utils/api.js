import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Retrieves all users.
 * @returns {Promise} Resolves to the user data.
 */
export const getAllUsers = async () => {
    const response = await api.get('/users', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

/**
 * Retrieves plans.
 * @param {string} token - Authorization token.
 * @returns {Promise} Resolves to the plan data.
 */
export const getPlans = async (token) => {
    const response = await api.get('/plans', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

/**
 * Adds a plan.
 * @param {string} token - Authorization token.
 * @param {object} plan - Plan data.
 * @returns {Promise} Resolves to the added plan data.
 */
export const addPlan = async (token, plan) => {
    try {
        const response = await api.post('/plans', plan, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * Retrieves optional matches for a plan.
 * @param {string} token - Authorization token.
 * @param {string} plan - Plan ID.
 * @returns {Promise} Resolves to the optional match data.
 */
export const getOptionalMatches = async (token, plan) => {
    const response = await api.get(`/plans/optional/${plan}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

/**
 * Adds a swipe.
 * @param {string} token - Authorization token.
 * @param {string} swiperPlan - ID of the plan that is swiping.
 * @param {string} swipedPlan - ID of the plan that is being swiped.
 * @param {boolean} isLiked - Indicates whether the swipe is a like or dislike.
 * @returns {Promise} Resolves to the added swipe data.
 */
export const addSwipe = async (token, swiperPlan, swipedPlan, isLiked) => {
    const response = await api.post('/swipes', {
        swiperPlan,
        swipedPlan,
        isLiked
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

/**
 * Retrieves conversations.
 * @param {string} token - Authorization token.
 * @returns {Promise} Resolves to the conversation data.
 */
export const getConversations = async (token) => {
    const response = await api.get('/conversations', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

/**
 * Retrieves matches.
 * @param {string} token - Authorization token.
 * @returns {Promise} Resolves to the match data.
 */
export const getMatches = async (token) => {
    const response = await api.get('/matches', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

/**
 * Adds a message to a conversation.
 * @param {string} token - Authorization token.
 * @param {object} message - Message data.
 * @param {string} message.match - ID of the match associated with the message.
 * @param {string} message.sender - ID of the sender of the message.
 * @param {string} message.text - Text content of the message.
 * @returns {Promise} Resolves to the added message data.
 */
export const addMessage = async (token, { match, sender, text }) => {
    try {
        const response = await api.post('/messages', {
            match,
            sender,
            text
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding message:', error);
        throw error;
    }
};



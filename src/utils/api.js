import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

/**
 * Retrieves all users from the server.
 * @returns {Promise} A promise that resolves to an array of user objects.
 */
export const getAllUsers = async () => {
    try {
        const response = await api.get("/users", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        // Handle error
        throw new Error(error.message);
    }
};

/**
 * Get all plans of a user.
 * @param {string} token - The user's access token.
 * @returns {Promise} A promise that resolves to an array of plan objects.
 */
export const getPlans = async (token) => {
    try {
        const response = await api.get("/plans", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        // Handle error
        throw new Error(error.message);
    }
};

/**
 * Retrieves all notifications of the user.
 * @param {string} token - The user's authentication token.
 * @returns {Promise<Object>} - A Promise that resolves to the response data.
 */
export const getNotifications = async (token) => {
    try {
        const response = await api.get("/notifications", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        // Handle error
        throw new Error(error.message);
    }
};

/**
 * Deletes all notifications of the user.
 * @param {string} token - The user's authentication token.
 * @returns {Promise<Object>} - A Promise that resolves to the response data.
 */
export const deleteNotifications = async (token) => {
    try {
        const response = await api.delete("/notifications", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        // Handle error
        throw new Error(error.message);
    }
};

export const addPlan = async (token, plan) => {
    try {
        const response = await api.post("/plans", plan, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const getOptionalMatchs = async (token, plan) => {
    const res = await api.get("/plans/optional/" + plan, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

/**
 * Swipes API
 */
export const addSwipe = async (token, swiperPlan, swipedPlan, isLiked) => {
    const res = await api.post(
        "/swipes",
        { swiperPlan, swipedPlan, isLiked },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return res.data;
};

/**
 * Conversations API
 */
export const getConversations = async (token) => {
    const res = await api.get("conversations", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

/**
 * Matches API
 */
export const getMatches = async (token) => {
    const res = await api.get("matches", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

/**
 * Messages API
 */
export const addMessage = async (token, { match, sender, text }) => {
    try {
        const res = await api.post(
            "/messages",
            { match, sender, text },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return res.data;
    } catch (error) {
        // Handle the error
        console.error("Error adding message:", error);
        throw error; // re-throw the error so it can be caught further up the call stack
    }
};

import React, { useState, useEffect, createContext, useRef } from "react";
import { login, register, fetchData, updateData } from "../utils/auth";
import io from "socket.io-client";
import {
    getMatches,
    getPlans,
    getNotifications,
    deleteNotifications,
} from "../utils/api";

// Create a new context for user-related data
const UserContext = createContext();

/**
 * UserProvider component manages user-related data and provides it to its children components through context.
 *
 * @param {Object} children - The child components wrapped by UserProvider.
 * @returns {JSX.Element} UserProvider component.
 */
export const UserProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const [token, setToken] = useState(null); // Stores the user's authentication token
    const [plans, setPlans] = useState(null);
    const [userData, setUserData] = useState(null); // Stores the user's data
    const [conversations, setConversations] = useState([]); // Stores the user's conversations
    const socket = useRef(); // Reference to the socket instance

    // useEffect hook to run on component mount
    useEffect(() => {
        // Retrieve token from local storage
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            // Set token state if it exists
            setToken(storedToken);
        }
    }, []);

    // Notifications
    useEffect(() => {
        const fetchNotifications = async () => {
            const notificationsData = await getNotifications(token);
            console.log(notificationsData);
            setNotifications(notificationsData);
        };
        fetchNotifications();
    }, [token]);

    useEffect(() => {
        const fetchPlans = async () => {
            const plansData = await getPlans(token);
            setPlans(plansData);
        };
        fetchPlans();
    }, [token]);

    useEffect(() => {
        // Fetch matches and set conversations when token changes
        const fetchMatches = async () => {
            const matchesData = await getMatches(token);
            setConversations(matchesData);
        };
        fetchMatches();
    }, [token]);

    useEffect(() => {
        if (token) {
            // Connect to the socket server
            socket.current = io("http://localhost:5000");
            // Emit an "add_user" event with the token
            socket.current.emit("add_user", token);
            // Listen for "msg_recieve" event to handle incoming messages
            socket.current.on("msg_recieve", (message) => {
                const matchId = message.match;
                const updatedConversations = conversations.map((conversation) => {
                    if (conversation._id === matchId) {
                        // Add the new message to the conversation's messages array
                        return {
                            ...conversation,
                            messages: [
                                ...conversation.messages,
                                {
                                    createdAt: Date.now(),
                                    sender: message.sender,
                                    text: message.text,
                                },
                            ],
                        };
                    }
                    return conversation;
                });
                const afterRemoveConvesation = updatedConversations.filter((c) => c._id !== matchId);
                const newConversation = updatedConversations.find((c) => c._id === matchId);
                setConversations([newConversation, ...afterRemoveConvesation]);
            });
            socket.current.on("new_match_recieve", ({ matchId, plainMatch }) => {
                console.log("matchId: " + matchId);
                console.log("matchedPlan: ", plainMatch);
                setConversations((prev) => [plainMatch, ...prev]);
                setNotifications((prev) => [...prev, matchId]);
            });
        }
    }, [token, conversations]);

    /**
     * Handles user login.
     *
     * @param {string} email - The user's email address.
     * @param {string} password - The user's password.
     * @returns {Promise} A promise that resolves with the login result.
     */
    const handleLogin = async (email, password) => {
        // Call login function from 'auth' module
        const res = await login(email, password);
        // Set token state with the result of the login function
        setToken(res);
        // Fetch user data using the obtained token
        const respo = await fetchData(res);
        // Set user data state with the result of the fetch function
        setUserData(respo);
        // Return the login result
        return res;
    };

    /**
     * Handles user registration.
     *
     * @param {Object} user - The user's registration data.
     * @returns {Promise} A promise that resolves with the registration result.
     */
    const handleRegister = async (user) => {
        // Call register function from 'auth' module
        const res = await register(user);
        // Set token state with the result of the register function
        setToken(res);
        // Return the registration result
        return res;
    };

    /**
     * Handles user logout.
     */
    const handleLogout = () => {
        // Remove token from local storage
        localStorage.removeItem("token");
        // Set token state to null
        setToken(null);
    };

    /**
     * Handles user data update.
     *
     * @param {string} tok - The user's authentication token.
     * @param {Object} updatedData - The updated user data.
     * @returns {Promise} A promise that resolves with the updated user data.
     */
    const handleUserUpdate = async (tok, updatedData) => {
        // Call updateData function from 'auth' module
        const res = await updateData(tok, updatedData);
        // Set user data state with the result of the update function
        setUserData(res);
    };

    /**
     * Handles the deletion of all notifications for the user.
     */
    const handleDeleteNotifications = async () => {
        try {
            deleteNotifications(token);
        } catch (error) {
            // Handle error
            throw new Error(error.message);
        }
    };

    // Render the UserContext.Provider component with the provided values
    return (
        <UserContext.Provider
            value={{
                token,
                handleLogin,
                handleLogout,
                handleRegister,
                userData,
                handleUserUpdate,
                socket,
                setConversations,
                conversations,
                plans,
                setPlans,
                notifications,
                setNotifications,
                handleDeleteNotifications,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;

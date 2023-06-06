import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer } from "@chatscope/chat-ui-kit-react";
import LeftSidebar from "./ChatComponents/LeftSidebar";
import ActiveChatContainer from "./ChatComponents/ActiveChatContainer";
import RightSidebar from "./ChatComponents/RightSidebar";
import { getMatches, addMessage } from "../../utils/api";
import UserContext from "../../context/UserContext";

/**
 * ChatPage component represents the main chat page of the application.
 * It displays the left sidebar, active chat container, and right sidebar.
 */
const ChatPage = ({activeChat, setActiveChat}) => {
    const { token, socket, conversations, setConversations } = useContext(UserContext);

    /**
     * Handles sending a message in the active chat.
     * It adds the message to the conversation, updates the conversation list, and emits the message to the server.
     * @param {string} textContent - The content of the message.
     */
    const handleSendMessage = async (textContent) => {
        const conversation = conversations.find((c) => c._id === activeChat);
        const match = conversation._id;
        const sender = conversation.plan.userId;
        const message = { match, sender, text: textContent };

        await addMessage(token, message);

        conversation.messages = [
            ...conversation.messages,
            { createdAt: Date.now(), sender, text: textContent }
        ];

        const convsAfterRemove = conversations.filter((c) => c._id !== activeChat);
        const updatedConvs = [conversation, ...convsAfterRemove];
        setConversations(updatedConvs);

        socket.current.emit("send_msg", message);
    };

    // Fetches matches when the component is mounted
    useEffect(() => {
        const fetchMatches = async () => {
            const matchesData = await getMatches(token);
            setConversations(matchesData);
        };
        fetchMatches();
    }, []);

    return (
        <div style={{ position: "relative", height: "90vh" }}>
            <MainContainer>
                <LeftSidebar
                    conversations={conversations}
                    setActiveChat={setActiveChat}
                    activeChat={activeChat}
                />
                {activeChat && (
                    <ActiveChatContainer
                        conversation={conversations.find((c) => c._id === activeChat)}
                        handleSendMessage={handleSendMessage}
                    />
                )}
                {activeChat && (
                    <RightSidebar
                        conversation={conversations.find((c) => c._id === activeChat)}
                    />
                )}
            </MainContainer>
        </div>
    );
};

export default ChatPage;

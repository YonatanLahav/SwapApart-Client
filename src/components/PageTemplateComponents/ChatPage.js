import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer
} from "@chatscope/chat-ui-kit-react";
import LeftSidebar from "./ChatComponents/LeftSidebar";
import ActiveChatContainer from "./ChatComponents/ActiveChatContainer";
import { useEffect, useRef } from "react";
import { getMatches } from "../../utils/api";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import RightSidebar from "./ChatComponents/RightSidebar";
import io from 'socket.io-client';
import { addMessage } from '../../utils/api';

const ChatPage = () => {

    const [activeChat, setActiveChat] = useState(null);
    const [conversations, setConversations] = useState([]);
    const { token } = useContext(UserContext);
    const socket = useRef();

    const handleSendMessage = async (innerHtml, textContent, innerText) => {
        const conversation = conversations.find((c) => c._id == activeChat);
        const match = conversation._id;
        const sender = conversation.plan.userId;
        const message = { match, sender, text: textContent };
        await addMessage(token, message);
        conversation.messages = [...conversation.messages, { createdAt: Date.now(), sender, text: textContent }];
        const convsAfterRemove = conversations.filter((c) => c._id != activeChat);
        const updatedConvs = [conversation, ...convsAfterRemove]
        setConversations(updatedConvs);
        console.log(conversation);
        console.log(updatedConvs.length);
        socket.current.emit("send_msg", message);
    };



    useEffect(() => {
        const fetchMatches = async () => {
            const matchesData = await getMatches(token);
            setConversations(matchesData)
            console.log(matchesData)
        };
        fetchMatches();
    }, []);

    useEffect(() => {
        if (token) {
            socket.current = io('http://localhost:5000');
            socket.current.emit("add_user", token);
            socket.current.on("msg_recieve", (message) => {
                const matchId = message.match;
                const conversation = conversations.find((c) => c._id == matchId);
                console.log(conversations);
                console.log(matchId)
                conversation.messages = [...conversation.messages, { createdAt: Date.now(), sender: message.sender, text: message.text }];
                const convsAfterRemove = conversations.filter((c) => c._id != matchId);
                const updatedConvs = [conversation, ...convsAfterRemove]
                setConversations(updatedConvs);
            });

        }
    }, [token, conversations]);

    return (
        <div style={{ position: "relative", height: "90vh" }}>
            <MainContainer>
                <LeftSidebar
                    conversations={conversations}
                    setActiveChat={setActiveChat}
                    activeChat={activeChat} />
                {activeChat &&
                    <ActiveChatContainer
                        conversation={conversations.find((c) => c._id === activeChat)}
                        setConversations={setConversations}
                        socket={socket}
                        handleSendMessage={handleSendMessage}
                    />}
                {activeChat &&
                    <RightSidebar
                        conversation={conversations.find((c) => c._id === activeChat)}
                    />}
            </MainContainer>
        </div>
    );
}


export default ChatPage
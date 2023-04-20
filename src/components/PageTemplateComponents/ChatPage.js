import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ConversationList,
    Sidebar,
    Conversation,
    Search,
    Message,
    MessageInput,
} from "@chatscope/chat-ui-kit-react";
import LeftSidebar from "./ChatComponents/LeftSidebar";
import ActiveChatContainer from "./ChatComponents/ActiveChatContainer";
import { useEffect } from "react";
import { getConversations, getMatches } from "../../utils/api";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import RightSidebar from "./ChatComponents/RightSidebar";

const ChatPage = () => {
    const [activeChat, setActiveChat] = useState(null);
    const [conversations, setConversations] = useState([]);
    const { token } = useContext(UserContext);

    useEffect(() => {
        const fetchMatches = async () => {
            const matchesData = await getMatches(token);
            setConversations(matchesData)
            console.log(matchesData)
        };
        fetchMatches();
    }, [token, activeChat]);

    return (
        <div style={{ position: "relative", height: "90vh" }}>
            <MainContainer>
                <LeftSidebar conversations={conversations} setActiveChat={setActiveChat} activeChat={activeChat} />
                {activeChat &&
                    <ActiveChatContainer
                        conversation={conversations.find((c) => c._id === activeChat)}
                        setConversations={setConversations} />}
                {/* <RightSidebar /> */}
            </MainContainer>
        </div>
    );
}


export default ChatPage
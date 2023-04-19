import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    MessageList,
    Message,
    MessageInput,
} from "@chatscope/chat-ui-kit-react";
import LeftSidebar from "./ChatComponents/LeftSidebar";
import ChatContainer from "./ChatComponents/ChatContainer";
import { useEffect } from "react";
import { getConversations, getMatches } from "../../utils/api";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import RightSidebar from "./ChatComponents/RightSidebar";

const ChatPage = () => {
    const [activeChatUsername, setActiveChatUsername] = useState("Roy");
    const [conversations, setConversations] = useState([]);
    // const [render, setRender] = useState(null);
    // const [updateData, setData] = useState(data);
    const { token } = useContext(UserContext);

    useEffect(() => {
        const fetchMatches = async () => {
            const matchesData = await getMatches(token);
            setConversations(matchesData)
            console.log(matchesData)
        };
        fetchMatches();
    }, [token]);

    return (
        <div style={{ position: "relative", height: "500px" }}>
            <MainContainer>
                <LeftSidebar conversations={conversations} setActiveChatUsername={setActiveChatUsername} />
                <ChatContainer activeChatUsername={activeChatUsername} />
                <RightSidebar />
            </MainContainer>
        </div>
    );
}


export default ChatPage
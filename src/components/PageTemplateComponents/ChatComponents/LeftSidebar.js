import React from 'react'
import { Sidebar, Search, Conversation, Avatar } from "@chatscope/chat-ui-kit-react";
import ConversationList from './ConversationList';

const LeftSidebar = ({ conversations, setActiveChatUsername }) => {

    return (
        <Sidebar position="left" scrollable={false}>
            <Search placeholder="Search..." />
            <ConversationList conversations={conversations} setActiveChatUsername={setActiveChatUsername} />
        </Sidebar>
    );
}

export default LeftSidebar
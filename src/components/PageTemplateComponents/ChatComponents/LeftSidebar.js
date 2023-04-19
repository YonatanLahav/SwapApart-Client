import React from 'react'
import { Sidebar, Search, Conversation, Avatar } from "@chatscope/chat-ui-kit-react";
import ConversationList from './ConversationList';

const LeftSidebar = ({setActiveChatUsername}) => {

    return (
        <Sidebar position="left" scrollable={false}>
            <Search placeholder="Search..." />
            <ConversationList setActiveChatUsername={setActiveChatUsername}/>
        </Sidebar>
    );
}

export default LeftSidebar
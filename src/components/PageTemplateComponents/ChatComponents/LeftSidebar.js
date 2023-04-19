import React from 'react'
import { Sidebar, Search, ConversationList, Conversation, Avatar } from "@chatscope/chat-ui-kit-react";

const LeftSidebar = (props) => {

    return (
        <Sidebar position="left" scrollable={false}>
            <Search placeholder="Search..." />
            <ConversationList>
                <Conversation name="Lilly"  >
                </Conversation>
            </ConversationList>
        </Sidebar>
    );
}

export default LeftSidebar
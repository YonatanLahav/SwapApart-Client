import React from 'react';
import {
    Sidebar,
    Search,
    Conversation,
    ConversationList,
    Avatar,
} from '@chatscope/chat-ui-kit-react';

const LeftSidebar = ({ conversations, activeChat, setActiveChat }) => {

    const getFullName = (conversation) => {
        return `${conversation.matchedUser.firstName} ${conversation.matchedUser.lastName}`;
    };
    const getFullNameRegion = (conversation) => {
        return `${conversation.matchedUser.firstName} ${conversation.matchedUser.lastName} : ${conversation.plan.region}`;
    };

    const lastSenderName = (conversation) => {
        if (!conversation.lastMessage) return null;
        return conversation.plan.userId === conversation.lastMessage.sender
            ? 'Me'
            : conversation.matchedUser.firstName;
    };

    const isActive = (conversation) => {
        return activeChat === conversation._id;
    };

    const getAvatarSrc = (conversation) => {
        const url =
            'https://ui-avatars.com/api/?rounded=true&bold=true&background=random&name=';
        return url + getFullName(conversation);
    };

    const getLastMessageText = (conversation) => {
        if (!conversation.lastMessage) return null;
        return conversation.lastMessage.text;
    };

    return (
        <Sidebar position="left" scrollable={false}>
            <Search placeholder="Search..." />
            <ConversationList>
                {conversations.map((conversation, index) => (
                    <Conversation
                        key={conversation._id}
                        name={getFullNameRegion(conversation)}
                        lastSenderName={lastSenderName(conversation)}
                        onClick={() => setActiveChat(conversation._id)}
                        active={isActive(conversation)}
                        info={getLastMessageText(conversation)}
                    >
                        <Avatar
                            src={getAvatarSrc(conversation)}
                            name={getFullName(conversation)}
                            
                        />
                    </Conversation>
                ))}
            </ConversationList>
        </Sidebar>
    );
};

export default LeftSidebar;

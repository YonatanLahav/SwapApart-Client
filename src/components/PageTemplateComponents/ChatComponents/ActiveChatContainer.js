import React, { useState } from 'react'
import { ChatContainer, ConversationHeader, InfoButton, Avatar } from "@chatscope/chat-ui-kit-react";

function ActiveChatContainer({ conversation }) {

    const getFullName = (c) => {
        return `${c.matchedUser.firstName} ${c.matchedUser.lastName}`;
    };
    const getAvatarSrc = (c) => {
        const url =
            'https://ui-avatars.com/api/?rounded=true&bold=true&background=random&name=';
        return url + getFullName(c);
    };

    return (
        <ChatContainer>
            <ConversationHeader>
                {/* <ConversationHeader.Back /> */}
                <Avatar src={getAvatarSrc(conversation)} name="Zoe" />
                <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
                <ConversationHeader.Actions>
                    <InfoButton />
                </ConversationHeader.Actions>
            </ConversationHeader>
        </ChatContainer>
    );
};

export default ActiveChatContainer
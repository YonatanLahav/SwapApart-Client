import React from 'react'
import { Conversation } from "@chatscope/chat-ui-kit-react";

function ConversationList({ conversations, setActiveChatUsername }) {
    return (
        <>
            {conversations.map((conversation) =>
                <Conversation
                    name={conversation.matchedUser.firstName + " " + conversation.matchedUser.lastName}
                    onClick={() => setActiveChatUsername(conversation.matchedUser.firstName)} />
            )}
        </>
    )
}

export default ConversationList
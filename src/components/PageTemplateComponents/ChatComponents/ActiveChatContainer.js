import React, { useState } from 'react'
import { ChatContainer, ConversationHeader, InfoButton, Avatar, MessageList, MessageSeparator, Message, MessageInput } from "@chatscope/chat-ui-kit-react";
import { useContext } from 'react';
import UserContext from '../../../context/UserContext';
import { addMessage } from '../../../utils/api';

function ActiveChatContainer({ conversation, setConversations }) {

    const { token } = useContext(UserContext);

    const handleSend = async (innerHtml, textContent, innerText) => {
        const match = conversation._id;
        const sender = conversation.plan.userId;
        const message = { match, sender, text: textContent };
        await addMessage(token, message);
        setConversations(prevConversations => {
            const updatedConversations = prevConversations.map(c => {
                if (c._id === conversation._id) {
                    return {
                        ...c,
                        messages: [...c.messages, { createdAt: Date.now(), sender, text: textContent }]
                    };
                } else {
                    return c;
                }
            });
            return updatedConversations;
        });
    };



    const senderName = (sender) => {
        if (!sender) return null;
        return conversation.plan.userId == sender
            ? 'Me'
            : conversation.matchedUser.firstName;
    };

    const getDirection = (sender) => {
        return senderName(sender) == 'Me'
            ? "outgoing"
            : "incoming";
    };

    const calcTime = (createdAt) => {
        const messageDate = new Date(createdAt);
        const now = new Date();
        const diff = Math.round((now - messageDate) / 1000);
        // format the time difference as a string
        let timeString;
        if (diff < 60) {
            timeString = `${diff} seconds ago`;
        } else if (diff < 3600) {
            timeString = `${Math.floor(diff / 60)} minutes ago`;
        } else if (diff < 86400) {
            timeString = `${Math.floor(diff / 3600)} hours ago`;
        } else {
            timeString = `${Math.floor(diff / 86400)} days ago`;
        }
        return timeString;
    };

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
                <Avatar src={getAvatarSrc(conversation)} name={getFullName(conversation)} />
                <ConversationHeader.Content userName={getFullName(conversation)} />
                <ConversationHeader.Actions>
                    <InfoButton />
                </ConversationHeader.Actions>
            </ConversationHeader>

            <MessageList>
                {conversation.messages.map(({ createdAt, sender, text }, index, messages) => {
                    // Check if the previous message was sent by the same sender
                    const prevSender = messages[index - 1]?.sender;
                    const sameSender = prevSender === sender;

                    // Determine the position based on whether this message is the first, last or normal message from the sender
                    let position = "normal";
                    if (index === 0) {
                        position = "first";
                    } else if (index === messages.length - 1) {
                        position = "last";
                    } else if (!sameSender) {
                        position = "first";
                    }

                    return (
                        <Message
                            key={createdAt}
                            model={{
                                message: text,
                                sentTime: calcTime(createdAt),
                                sender: senderName(sender),
                                direction: getDirection(sender),
                                position: position
                            }}                        >
                            {position === "first" && (
                                <Message.Header
                                    sender={senderName(sender)}
                                    sentTime={calcTime(createdAt)}
                                />
                            )}
                        </Message>
                    );
                })}
            </MessageList>

            <MessageInput placeholder="Type message here..." attachButton={false} onSend={handleSend} />



        </ChatContainer>
    );
};

export default ActiveChatContainer
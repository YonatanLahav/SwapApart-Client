import React from 'react'
import {
    ChatContainer,
    ConversationHeader,
    InfoButton,
    Avatar,
    MessageList,
    Message,
    MessageInput
} from "@chatscope/chat-ui-kit-react";

/**
 * ActiveChatContainer component displays the active chat conversation.
 * It includes the conversation header, message list, and message input.
 * @param {Object} conversation - The conversation object.
 * @param {Function} handleSendMessage - The function to handle sending a message.
 */
function ActiveChatContainer({ conversation, handleSendMessage }) {

    /**
       * Retrieves the sender name based on the conversation and sender ID.
       * @param {string} sender - The sender ID.
       * @returns {string|null} - The sender name or null if not found.
       */
    const senderName = (sender) => {
        if (!sender) return null;
        return conversation.plan.userId == sender
            ? 'Me'
            : conversation.matchedUser.firstName;
    };

    /**
   * Determines the message direction based on the sender.
   * @param {string} sender - The sender ID.
   * @returns {string} - The message direction ("outgoing" or "incoming").
   */
    const getDirection = (sender) => {
        return senderName(sender) == 'Me'
            ? "outgoing"
            : "incoming";
    };

    /**
      * Calculates the time difference between the message creation time and the current time.
      * @param {string} createdAt - The creation time of the message.
      * @returns {string} - The formatted time difference string.
      */
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

    /**
   * Retrieves the full name of a conversation user.
   * @param {Object} c - The conversation object.
   * @returns {string} - The full name of the user.
   */
    const getFullName = (c) => {
        return `${c.matchedUser.firstName} ${c.matchedUser.lastName}`;
    };

    /**
   * Generates the avatar source URL based on the conversation user's full name.
   * @param {Object} c - The conversation object.
   * @returns {string} - The avatar source URL.
   */
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

            <MessageInput placeholder="Type message here..." attachButton={false} onSend={handleSendMessage} />



        </ChatContainer>
    );
};

export default ActiveChatContainer
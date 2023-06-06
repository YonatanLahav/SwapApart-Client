import React from 'react';
import {
    Sidebar,
    Search,
    Conversation,
    ConversationList,
    Avatar,
} from '@chatscope/chat-ui-kit-react';

/**
 * LeftSidebar component displays the list of conversations in the left sidebar.
 *
 * @param {Object[]} conversations - The array of conversation objects.
 * @param {string} activeChat - The ID of the currently active chat.
 * @param {function} setActiveChat - The function to set the active chat.
 * @returns {JSX.Element} The rendered LeftSidebar component.
 */
const LeftSidebar = ({ conversations, activeChat, setActiveChat }) => {

    /**
     * Gets the full name of the matched user in a conversation.
     *
     * @param {Object} conversation - The conversation object.
     * @returns {string} The full name of the matched user.
     */
    const getFullName = (conversation) => {
        return `${conversation.matchedUser.firstName} ${conversation.matchedUser.lastName}`;
    };

    /**
     * Gets the full name and region of the matched user in a conversation.
     *
     * @param {Object} conversation - The conversation object.
     * @returns {string} The full name and region of the matched user.
     */
    const getFullNameRegion = (conversation) => {
        return `${getFullName(conversation)} : ${conversation.plan.region}`;
    };

    /**
     * Gets the name of the last sender in a conversation.
     *
     * @param {Object} conversation - The conversation object.
     * @returns {string|null} The name of the last sender or null if no messages are present.
     */
    const lastSenderName = (conversation) => {
        if (!conversation.messages || conversation.messages.length === 0) return null;
        return conversation.plan.userId === conversation.messages[conversation.messages.length - 1].sender
            ? 'Me'
            : conversation.matchedUser.firstName;
    };

    /**
     * Checks if a conversation is active.
     *
     * @param {Object} conversation - The conversation object.
     * @returns {boolean} True if the conversation is active, false otherwise.
     */
    const isActive = (conversation) => {
        return activeChat === conversation._id;
    };

    /**
     * Gets the avatar source for a conversation.
     *
     * @param {Object} conversation - The conversation object.
     * @returns {string} The URL of the avatar source.
     */
    const getAvatarSrc = (conversation) => {
        const url =
            'https://ui-avatars.com/api/?rounded=true&bold=true&background=random&name=';
        return url + getFullName(conversation);
    };

    /**
     * Gets the text of the last message in a conversation.
     *
     * @param {Object} conversation - The conversation object.
     * @returns {string|null} The text of the last message or null if no messages are present.
     */
    const getLastMessageText = (conversation) => {
        if (!conversation.messages || conversation.messages.length === 0) return null;
        return conversation.messages[conversation.messages.length - 1].text;
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
                        onClick={() =>setActiveChat(conversation._id)}
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

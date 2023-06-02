import React from 'react';
import { MessageSeparator, Message } from "@chatscope/chat-ui-kit-react";

/**
 * MessageList component displays a list of messages.
 *
 * @param {Object[]} messages - The array of message objects.
 * @returns {JSX.Element} The rendered MessageList component.
 */
function MessageList({ messages }) {
  return (
    <div>
      {messages.map((messageDetails) => <Message model={messageDetails} />)}
    </div>
  );
}

export default MessageList;

import React from 'react'
import { MessageSeparator, Message } from "@chatscope/chat-ui-kit-react";

function MessageList({messeges}) {
    
  return (
    <div>
        <MessageSeparator content="Saturday, 30 November 2019" />
        {messeges.map((messeges) => <Message model={messeges}/>)}
    </div>
  )
}

export default MessageList
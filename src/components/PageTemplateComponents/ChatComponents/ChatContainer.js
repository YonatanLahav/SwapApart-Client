import React, { useState } from 'react'
import { MessageSeparator, Message, MessageInput, Avatar, TypingIndicator, ConversationHeader } from "@chatscope/chat-ui-kit-react";
import MessageList from './MessageList'

function ChatContainer({activeChatUsername}) { 
    const [Messages, setMessages] = useState([{
        message: "Hello my friend!!!!!",
        sentTime: "15 mins ago",
        sender: "Zoe",
        direction: "incoming",
        position: "single"    
        },
        {message: "how are yoy ?",
        sentTime: "15 mins ago",
        sender: "Zoe",
        direction: "incoming",
        position: "single"
    },
    {
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Patrik",
        direction: "outgoing",
        position: "single"
    },
    {
        message: "im great how are you ??",
        sentTime: "15 mins ago",
        sender: "Patrik",
        direction: "outgoing",
        position: "first"
    },
    {
        message: "fuck",
        sentTime: "15 mins ago",
        sender: "Patrik",
        direction: "outgoing",
        position: "normal"
        },
    {
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Zoe",
        direction: "incoming",
        position: "last"
    }
    ]);
    const [messageInputValue, setMessageInputValue] = useState("");
    

    const handleSend = () => {
        const newMessage = {
            message: messageInputValue,
            sentTime: "15 mins ago",
            sender: "Patrik",
            direction: "outgoing",
            position: "normal"
            };
        setMessages([...Messages, newMessage]);
        setMessageInputValue('')  
    }

    return (
        <div style={{width: "600px", overflow: "auto"}} >
        <ConversationHeader>
        <ConversationHeader.Content userName={activeChatUsername} info="Active 10 mins ago" />
      </ConversationHeader>
      <div style={{overflow: "auto"}}>
      <MessageList messeges={Messages}/>     
      </div>   
      <MessageInput placeholder="Type message here" value={messageInputValue} onChange={val => setMessageInputValue(val)} onSend={handleSend} />
      </div>
    )
}

export default ChatContainer
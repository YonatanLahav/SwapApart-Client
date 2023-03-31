import React from 'react'
import './ChatPage.css'
import ChatList from './ChatComp/ChatList'
import { useState } from 'react'
import Conversation from './ChatComp/Conversation'
import { data } from './data';


const ChatPage = (props) => {

    const [activeChatUsername, setActiveChatUsername] = useState(null);
    const [render, setRender] = useState(null);
    const [updateData, setData] = useState(data);


    return (
        <div className='container outer inner-chat '>
                <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '3vh'}}>Matches !</h1>
            <div className='wrapper'>
                
                    <ChatList user={data[0]} chats={data[0].chats} updateData={updateData} setActiveChatUsername={setActiveChatUsername} />
                
                {(activeChatUsername === null) ? "" : <Conversation setRender={setRender} chats={data[0].chats.find(({ username }) => activeChatUsername === username)} user={data[0]} />}
                
            </div >
        </div >
    )
}


export default ChatPage
import React from 'react'
import { Conversation} from "@chatscope/chat-ui-kit-react";

function ConversationList({setActiveChatUsername}) {
    const chats = [{
        Name : "Roy",
        day : "9"
    },
    {
        Name : "Lilly",
        day : "8"
    },
    {
        Name : "Yonatan",
        day : "7"
    }
]
  return (
    <div>
        {chats.map(({day}) => <Conversation name={day} onClick={()=>setActiveChatUsername(day)}/>)}
    </div>
  )
}

export default ConversationList
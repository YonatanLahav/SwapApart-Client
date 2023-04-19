import React from 'react'
import { Conversation} from "@chatscope/chat-ui-kit-react";

function ConversationList({setActiveChatUsername}) {
    const chats = [{
        Name : "Roy"
    },
    {
        Name : "Lilly"
    },
    {
        Name : "Yonatan"
    }
]
  return (
    <div>
        {chats.map(({Name}) => <Conversation name={Name} onClick={()=>setActiveChatUsername(Name)}/>)}
    </div>
  )
}

export default ConversationList
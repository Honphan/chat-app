import React from 'react'

function ChatList({chats}) {

    const user = localStorage.getItem('user')
    const SenderChat = ({chat}) => {
        return (
            <div className='sender-chat'>
                <img className='sender-chat-img' src={chat.avatar} alt="Sender"  />
                <div className='sender-chat-message'>
                    <div className='sender-chat-name'>You</div>
                    <div className='sender-chat-text'>{chat.message}</div>
                </div>
            </div>
        )
    }

    const ReceiverChat = ({chat}) => {
        return (
            <div className='receiver-chat'>
                <img className='receiver-chat-img' src={chat.avatar} alt="Receiver"  />
                <div className='receiver-chat-message'>
                    <div className='receiver-chat-name'>{chat.username}</div>
                    <div className='receiver-chat-text'>{chat.message}</div>
                </div>
            </div>
        )
    }

  return (
    <div className='chat-messages'>
        {
            chats.map((chat, index) => {
                return chat.username === user ? <SenderChat key={index} chat={chat} /> : <ReceiverChat key={index} chat={chat}/>
            })
        }
    </div>
  )
}

export default ChatList
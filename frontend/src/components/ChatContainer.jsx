import React, { useEffect } from 'react'
import ChatList from './ChatList'
import InputText from './InputText'
import UserLogin from './UserLogin'
import socketIOclient from 'socket.io-client'
import { RandomAvt } from '../utils/RandomAvt'

function ChatContainer() {
   const [user, setUser] = React.useState(localStorage.getItem('user') || '')
   const socketio = socketIOclient('http://localhost:3000')
   const [chats, setChats] = React.useState([])
   useEffect(() => {
    socketio.on("chat", (chats) => {
      setChats(chats);
    });

    socketio.on('message', (msg) => {
      setChats((chats) => [...chats, msg])
    })

    return () => {
      socketio.off('chat')
      socketio.off('message')
    }
  }, []);

  const addMessage = (chat) => {
    const newChat = {
      username: localStorage.getItem("user"),
      message: chat,
      avatar: localStorage.getItem('avatar'),
    };
    socketio.emit('newMessage', newChat)
  };



const Logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem('avatar')
    setUser('')
  }
  return (
    
    <div>
        {user ? (
        <div className='chat-container'>
            <div className='chat-header'>
              <div className='user-name'>Chat App</div>
              <button className='logout-button' onClick={Logout}>Logout</button>
            </div>

            
            {/* Messages will be displayed here */}
            <ChatList chats={chats}/>
            
            <InputText addMessage={addMessage} />
        </div>) :
        <UserLogin setUser={setUser}/>}
    </div>
  )
}

export default ChatContainer
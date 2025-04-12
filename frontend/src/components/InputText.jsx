import React from 'react'

function InputText({addMessage}) {
    const [message, setMessage] = React.useState('')
   const sendMessage = () => {
    addMessage(message)
    setMessage('')
   }
  return (
    <>
     <div className='chat-input'>
        <input type="text" placeholder="Type a message..." onChange={(e) => setMessage(e.target.value)} value={message}/>
        <button onClick={sendMessage} >Send</button>
     </div>
    </>
  )
}

export default InputText
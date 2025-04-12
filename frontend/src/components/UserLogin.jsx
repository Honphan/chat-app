import React from 'react'
import { RandomAvt } from '../utils/RandomAvt'


function UserLogin({setUser}) {
    const [ username, setUsername ] = React.useState('')
    const handleUser = () => {
        if( username ==- ''){
            return;
        } 
        localStorage.setItem('user', username);
        setUser(username);
        localStorage.setItem('avatar', RandomAvt())
    }
  return (
   <>
    <div className='login-container'>
     <div className='login-title'>Chat App</div>
     <div className='login-form'>
        <input type="text" placeholder="Username" onChange={(e) =>{setUsername(e.target.value)}}/>
        <button onClick={handleUser}>Login</button>
     </div>
    </div>
   </> 
  )
}

export default UserLogin
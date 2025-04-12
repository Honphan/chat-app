import React from 'react'


function UserLogin({setUser}) {
    const [ username, setUsername ] = React.useState('')
    const handleUser = () => {
        if( username ==- ''){
            return;
        } 
        localStorage.setItem('user', username);
        setUser(username);
        localStorage.setItem('avatar', 'https://res.cloudinary.com/dq5jpjdgu/image/upload/v1742216164/FILMFLIX/afvg-1742216159028.jpg')
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
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)                //3. Consumer se data lo (user detals is getting consumed here)
    if(!user)
        return <h1>Not Logged In Currently</h1>
    
    return (
    <div>
        <h1>Profile:{user.username}</h1>
    </div> 
  )
}

export default Profile  
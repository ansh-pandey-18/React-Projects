import React,{useState} from 'react'
import Profile from './Profile'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)         //3. Consumer se data lo(yha p sirf setUser consume hora to set user)

    const handleSubmit=(e)=>{
        //Prevent page from refreshing
        e.preventDefault()
        setUser({username,password})                //ContextProvider method setUser is setting user here st User can be used by other components
    }

  return (
    <div>
        
            <h2>Login</h2>
            <input 
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username'
            />

            <input 
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password'
            />

            <button
            onClick={handleSubmit}
            >Submit</button>
    </div>
    

  )
}

export default Login
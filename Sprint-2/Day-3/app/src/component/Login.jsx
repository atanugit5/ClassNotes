import React, { useContext } from 'react'
import { AuthContext } from '../../../../../../Sprint-2/Day-3/app/src/context/AuthContextProvider'

const Login = () => {
    const {isAuth, setIsAuth}=useContext(AuthContext)
    const handleClick=()=>{
setIsAuth(true)
    }
  return (
    <div>
        <h2>Login</h2>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
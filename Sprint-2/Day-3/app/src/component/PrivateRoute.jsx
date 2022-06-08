import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'

const PrivateRoute = () => {
    const {isAuth}=useContext(AuthContext)
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute
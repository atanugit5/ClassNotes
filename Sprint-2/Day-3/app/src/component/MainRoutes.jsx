import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import User from './User'
import Users from './Users'

const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/users/:id" element={<User/>}/>
            
        </Routes>
    </div>
  )
}

export default MainRoutes
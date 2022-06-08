import React from 'react'
import { useSelector } from "react-redux"

const Todos = () => {
    const todos = useSelector((state)=>state.todos)
  return (
    <div>
        <h1>Todos</h1>
        {todos.map((elem)=>(<h4 key={elem.id}>{elem.title}</h4>))}
    </div>
  )
}

export default Todos
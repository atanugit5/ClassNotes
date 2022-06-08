import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/action'
import {v4 as uuid} from "uuid"

const TodoInput = () => {
    const [title,setTitle]=useState("")
    const dispatch = useDispatch()
    const handleClick=()=>{
        const payload ={title, status:false,id:uuid()}
        const addTodoAction = addTodo(payload);
        dispatch(addTodoAction)
        setTitle("");
    }
  return (
    <div>
        <h1>Add Todo</h1>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="add something"/>
        <button onClick={handleClick}>ADD</button>
    </div>
  )
}

export default TodoInput
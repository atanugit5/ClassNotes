import React, { useEffect, useState } from 'react'

const ChatApp = () => {
    const [user,setuser]=useState("Atanu");
    const [text,setText]=useState("");
    const handleUpdate=()=>{
        setuser(text);
    }
    const subscribe=(user)=>{
        const id=setInterval(()=>{

        },2000);
        return()=>{
            clearInterval(id)
        }
    }
    useEffect(()=>{
        const unsubscribe = subscribe(user)
        return ()=>{
            unsubscribe()
        }
    },[user])
  return (
    <div><h1>ChatApp</h1>
    <div>
        <input onChange={(e)=>setText(e.target.value)} type="text" value={text}/>
        <button onClick={handleUpdate}>Update</button>
    </div>
    <h3>Listening to {user}</h3>
    </div>
  )
}

export default ChatApp
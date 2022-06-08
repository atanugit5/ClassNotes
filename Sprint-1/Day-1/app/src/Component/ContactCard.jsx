import React from 'react'

const ContactCard = ({id,name,phone,onDelete}) => {
  return (
    <div style={{display:"flex",gap:"10px", justifyContent:"center"}}>
      <h2>{name}</h2>
      <h4>{phone}</h4>
      <button onClick={()=>onDelete(id)} style={{width:"100px",height:"20px",marginTop:"20px"}}>DELETE</button>

    </div>
  )
}

export default ContactCard
import React, { useState } from "react";

const AddContact = (props) => {
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");
  const handleClick = ()=>{
    if(props.handleClick) props.handleClick(text,phone);
    setText("");
    setPhone("");
  }
  return (
    <div>
      <input
        placeholder="add name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <input
        placeholder="add phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddContact;

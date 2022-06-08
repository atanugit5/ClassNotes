import React, { useState } from "react";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";

const initState = [
  { id: 1, name: "Atanu Mondal", phone: "+91-9088313957" },
  { id: 2, name: "Santanu Mondal", phone: "+91-9088313975" },
];
const ContactList = () => {
  const [contactList, setContactList] = useState(initState);
  const handleClick = (name, phone) => {
    setContactList([
      ...contactList,
      {
        id: contactList[contactList.length - 1].id + 1,
        name: name,
        phone: phone,
      },
    ]);
  };
  const deleteById =(id)=>{
    setContactList(contactList.filter((item)=>item.id !==id))
  }
  return <div>
    <h1>Contact List</h1>
    <AddContact handleClick={handleClick}/>
    <br />
    <div>
      {contactList.map((el)=>(<ContactCard key={el.id} {...el} onDelete={deleteById}/>))}
    </div>
  </div>;
};

export default ContactList;

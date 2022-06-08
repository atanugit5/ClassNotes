import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const User = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    const { id } = params;
    axios({ method: "GET", url: `https://reqres.in/api/users/${id}` })
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [params.id]);
  return (
    <div>
      <h1>Users Details</h1>
      {loading && <h1>Loading.....</h1>}
      <div style={{ width: "300px", margin: "auto" }}>
     
    
          <div
            style={{
              border: "1px solid black",
              margin: "1rem",
              padding: "1rem",
            }}
            key={data.id}
          >
            <img src={data.avatar} alt="" />
            <div>Name:{data.first_name} </div>
            <div>{data.email}</div>
          </div>
        
      </div>
    </div>
  );
};

export default User;

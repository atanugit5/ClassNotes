import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({ method: "GET", url: "https://reqres.in/api/users" })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>All Users</h1>
      {loading && <h1>Loading.....</h1>}
      <div style={{ width: "300px", margin: "auto" }}>
        {data?.data?.map((el) => (
          <div
            style={{
              border: "1px solid black",
              margin: "1rem",
              padding: "1rem",
            }}
            key={el.id}
          >
            <div>{el.first_name}</div>
            <div>{el.email}</div>
            <Link to={`/users/${el.id}`}>See more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

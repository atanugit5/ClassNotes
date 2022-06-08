import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const loading = useSelector((state)=>state.todos.loading);
  const error = useSelector((state)=>state.todos.error);
  console.log(todos);
  return (
    <div>
      <h2>TodoList</h2>
      {loading && <h1>Loading....</h1>}
      {todos.map((el) => (
        <div key={el.id}>{el.title}</div>
      ))}
      {error && <h1>Error 404</h1>}
    </div>
  );
};

export default TodoList;

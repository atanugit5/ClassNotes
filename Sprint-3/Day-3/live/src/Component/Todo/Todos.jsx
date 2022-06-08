import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { getTodos } from "../../Redux/Todo/action";
// import axios from axios;

const Todos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos(dispatch);
  },[dispatch]);
  return (
    <div>
      <TodoInput />
      <br /> <br />
      <TodoList />
    </div>
  );
};

export default Todos;

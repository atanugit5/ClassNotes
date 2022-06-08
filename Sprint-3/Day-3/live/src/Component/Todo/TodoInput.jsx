import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos, getTodos } from "../../Redux/Todo/action";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    addTodos({
      title: text,
      dispatch,
    }).then(() => {
      getTodos(dispatch);
    });
  };
  return (
    <div>
      <h1>TodoInput</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add somthing"
      />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};

export default TodoInput;

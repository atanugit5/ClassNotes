import React, { useReducer } from "react";

const initState = {
  counter: 0,
  noOfClick: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case "decrement": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default:
      return state;
  }
};

const counterAction = {
  increment: "increment",
  decrement: "decrement",
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1> Counter: {state.counter}</h1>
      {/* <button onClick={() => dispatch({ type: "increment" })}>Add</button> */}
      <button onClick={() => dispatch({ type: counterAction.increment })}>Add</button>
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>Reduce</button>
    </div>
  );
};

export default Counter;

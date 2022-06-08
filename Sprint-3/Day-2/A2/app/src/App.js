import React, { useContext } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementCountAction } from "./Redux/action";
// import { ReduxContext } from "./Redux/ReduxProvider";

function App() {
  // const [getState,dispatch]= useContext(ReduxContext)
  // const state= getState()
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count : {count}</h1>
      {/* <button onClick={()=>dispatch(incrementCountAction(1))}>ADD</button>
    <button onClick={()=>dispatch(incrementCountAction(-1))}>REDUCE</button> */}
      <button onClick={() => dispatch(incrementCountAction(10))}>ADD</button>
      <button onClick={() => dispatch(incrementCountAction(-5))}>REDUCE</button>
    </div>
  );
}

export default App;

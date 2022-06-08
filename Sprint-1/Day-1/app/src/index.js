import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

 const root = ReactDOM.createRoot(document.getElementById("root"));

// const elem = React.createElement("button", {}, "Click Me");
// const elem2 = React.createElement("button", {}, "Click Me2");
// function Button(props) {
//   return <button onClick={() => props?.handleClick()}>{props.title}</button>;
// }

// const MyApp = React.createElement("div", {}, [
//   elem,
//   elem2,
//   Button({ title: "With Props-1", handleClick: () => alert("hello 1") }),
//   Button({ title: "With Props-2", handleClick: () => alert("hello 2") }),
//   Button({ title: "With Props-3", handleClick: () => alert("hello 3") }),
//   Button({ title: "With Props-4", handleClick: () => alert("hello 4") }),
//   <div>
//     <Button handleClick={() => alert("With JSx")} title="JSx" />
//   </div>,
// ]);
root.render(
  // MyApp

  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

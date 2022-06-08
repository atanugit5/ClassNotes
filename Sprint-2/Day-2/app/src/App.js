import "./App.css";
import Button from "./Button/Button";
import { useContext } from "react";
import { AppContext } from "./AppContext/AppContextProvider";
import Counter from "./Counter/Counter";

function App() {
  const { state, toggleTheme } = useContext(AppContext);
  return (
    <div className="App">
      <Button text="Theme" />
      <br />
      <br />
      <button onClick={toggleTheme}>Toggle</button>
      <br />
      <br />
      <Counter/>
    </div>
  );
}

export default App;

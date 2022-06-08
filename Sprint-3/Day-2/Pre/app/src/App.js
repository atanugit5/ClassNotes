import logo from './logo.svg';
import './App.css';
import TodoInput from './Component/TodoInput';
import Todos from './Component/Todos';

function App() {
  return (
    <div className="App">
      <TodoInput/>
      <Todos/>
    </div>
  );
}

export default App;

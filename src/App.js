import logo from './logo.svg';
import './App.css';
import Componente from "./components/componente.js";
import { useState } from 'react';
function App() {
  const [input, setInput] = useState({})
  console.log(input)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input onChange={(e)=>{setInput(e.target.value)}}/>
        <p>
          <Componente access={input}/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


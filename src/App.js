import React from "react";
import logo from "./logo.svg";
import ChatBot from "react-simple-chatbot";
import "./App.css";

const steps = [
  {
    id: "0",
    message: "Welcome to react chatbot!",
    trigger: "1"
  },
  {
    id: "1",
    message: "Bye!",
    end: true
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChatBot steps={steps} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

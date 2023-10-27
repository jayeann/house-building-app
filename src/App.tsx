import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1>Build your dream house with us</h1>
      <div className="card">
        <Button>Build my house</Button>
      </div>
      <p className="read-the-docs">Made by Jaye Ann Tagoctoc</p>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Countries from "./Components/Countries";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Where in the world?</h3>
        <a>
          <i className="fas fa-moon"></i>Dark Mode
        </a>
      </header>
      <Countries />
    </div>
  );
}

export default App;

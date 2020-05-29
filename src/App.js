import React, { useState, useEffect } from "react";
import "./App.css";
import Countries from "./Components/Countries";

function App() {
  const [data, setData] = useState([]);
  const [hasError, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(url) {
    setIsLoading(true);
    await fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Sorry! We didn't find any country");
        }
        return response.json();
      })
      .then((result) => setData(result))
      .catch((err) => setErrors(err));
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData("https://restcountries.eu/rest/v2/all");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Where in the world?</h3>
        <a className="darkBtn" href="/">
          <i className="fas fa-moon"></i>Dark Mode
        </a>
      </header>
      <div className="main-container">
        <Countries data={data} err={hasError} loading={isLoading} />
      </div>
    </div>
  );
}

export default App;

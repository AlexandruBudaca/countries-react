import React, { useState, useEffect } from "react";
import "./App.css";
import Countries from "./Components/Countries";
import Search from "./Components/Search";
import Filter from "./Components/Filter";

function App() {
  const [data, setData] = useState([]);
  const [hasError, setErrors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchCountry, setSearchCountry] = useState("");

  async function fetchData(url) {
    setIsLoading(true);
    await fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => setErrors(err));
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData("https://restcountries.eu/rest/v2/all");
  }, []);

  const filteredData = data.filter(
    (country) =>
      country.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchCountry.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h3>Where in the world?</h3>
        <a className="darkBtn" href="/">
          <i className="fas fa-moon"></i>Dark Mode
        </a>
      </header>
      <div className="main-container">
        <div className="SearchAndFilter">
          <Search
            searchCountry={searchCountry}
            setSearchCountry={setSearchCountry}
          />
          <Filter />
        </div>

        <Countries data={filteredData} err={hasError} loading={isLoading} />
      </div>
    </div>
  );
}

export default App;

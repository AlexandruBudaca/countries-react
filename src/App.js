import React, { useState, useEffect } from "react";
import "./App.css";
import Countries from "./Components/Countries";
import Search from "./Components/Search";
import Filter from "./Components/Filter";
import CountryDetail from "./Components/CountryDetail";

function App() {
  const [data, setData] = useState([]);
  const [hasError, setErrors] = useState(false);
  const [searchCountry, setSearchCountry] = useState("");
  const [region, setRegion] = useState("");
  const [detailData, setDetailData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchData(url, set) {
    await fetch(url)
      .then((response) => response.json())
      .then((result) => set(result))
      .catch((err) => setErrors(err));
  }
  async function fetchDetailsData(url) {
    setIsLoaded(false);
    await fetch(url)
      .then((response) => response.json())
      .then((result) => setDetailData(result))
      .catch((err) => setErrors(err));
    setIsLoaded(true);
  }

  useEffect(() => {
    if (countryName === "") {
    } else {
      fetchDetailsData("https://restcountries.eu/rest/v2/name/" + countryName);
    }

    region === ""
      ? fetchData("https://restcountries.eu/rest/v2/all/", setData)
      : fetchData("https://restcountries.eu/rest/v2/region/" + region, setData);
  }, [region, countryName]);

  const searchInData = data.filter(
    (country) =>
      country.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchCountry.toLowerCase())
  );
  const handleRegion = (e) => {
    setRegion(e.currentTarget.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Where in the world?</h3>
        <button className="darkBtn" href="/">
          <i className="fas fa-moon"></i>Dark Mode
        </button>
      </header>
      <div className="main-container">
        <div className="SearchAndFilter">
          <Search
            searchCountry={searchCountry}
            setSearchCountry={setSearchCountry}
          />
          <Filter handleRegion={handleRegion} />
        </div>
        {countryName === "" && (
          <Countries
            data={searchInData}
            err={hasError}
            setCountryName={setCountryName}
          />
        )}

        {countryName !== "" && (
          <CountryDetail
            data={detailData}
            setCountryName={setCountryName}
            isLoaded={isLoaded}
            borderData={data}
          />
        )}
      </div>
    </div>
  );
}

export default App;

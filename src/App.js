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
  const [darkMode, setDarkMode] = useState("dark-mode");
  const [showSearchAndFilter, setShowSearchAndFilter] = useState(true);

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
  const darkModeChange = () => {
    const root = document.documentElement;

    if (darkMode === "light-mode") {
      root.style.setProperty("--background-color", "hsl(0, 0%, 98%)");
      root.style.setProperty("--text-color", "hsl(200, 15%, 8%)");
      root.style.setProperty("--elements-color", "hsl(0, 0%, 100%)");
      root.style.setProperty("--box-shadow", "2px 2px 8px #999999");
      setDarkMode("dark-mode");
    } else {
      root.style.setProperty("--background-color", "hsl(207, 26%, 17%)");
      root.style.setProperty("--text-color", "hsl(0, 0%, 100%)");
      root.style.setProperty("--elements-color", "hsl(209, 23%, 22%)");
      root.style.setProperty("--box-shadow", "2px 2px 8px #000");
      setDarkMode("light-mode");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h3>Where in the world?</h3>
        <button
          className="darkBtn"
          onClick={() => {
            darkModeChange();
          }}
        >
          <i
            className={darkMode === "light-mode" ? "fas fa-sun" : "fas fa-moon"}
          ></i>
          {darkMode === "light-mode" ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <div className="main-container">
        {showSearchAndFilter ? (
          <div className="SearchAndFilter">
            <Search
              searchCountry={searchCountry}
              setSearchCountry={setSearchCountry}
            />
            <Filter handleRegion={handleRegion} />
          </div>
        ) : (
          ""
        )}

        {countryName === "" && (
          <Countries
            data={searchInData}
            err={hasError}
            setCountryName={setCountryName}
            setShowSearchAndFilter={setShowSearchAndFilter}
            showSearchAndFilter={showSearchAndFilter}
          />
        )}

        {countryName !== "" && (
          <CountryDetail
            data={detailData}
            setCountryName={setCountryName}
            isLoaded={isLoaded}
            borderData={data}
            setShowSearchAndFilter={setShowSearchAndFilter}
            showSearchAndFilter={showSearchAndFilter}
          />
        )}
      </div>
    </div>
  );
}

export default App;

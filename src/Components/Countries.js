import React from "react";
import logo from "../../src/logo.svg";
import CountryCard from "./CountryCard";

function errorData() {
  return (
    <div>
      <p>404</p>
      <h1>Sorry!</h1>
      <p>Something went wrong!</p>
    </div>
  );
}
const Countries = (props) => {
  return (
    <div>
      {props.err && errorData()}
      {props.data.length === 0 ? (
        <div className="loading">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="container">
          {props.data.map((countries, index) => (
            <CountryCard
              key={index}
              data={countries}
              setCountryName={props.setCountryName}
              setShowSearchAndFilter={props.setShowSearchAndFilter}
              showSearchAndFilter={props.showSearchAndFilter}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;

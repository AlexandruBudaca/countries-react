import React from "react";
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
      {props.loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          {props.data.map((countries, index) => (
            <CountryCard key={index} data={countries} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;

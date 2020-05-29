import React from "react";

const CountryCard = (props) => {
  return (
    <a className="link-country" href="/">
      <div className="card">
        <img src={props.data.flag} alt="country" />
        <h3>{props.data.name}</h3>
        <div className="content-card">
          <p>
            <span>Population:</span>
            {props.data.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <p>
            <span>Region:</span>
            {props.data.region}
          </p>
          <p>
            <span>Capital:</span>
            {props.data.capital}
          </p>
        </div>
      </div>
    </a>
  );
};
export default CountryCard;

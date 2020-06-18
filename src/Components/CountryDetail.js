import React from "react";

const CountryDetail = ({ data, setCountryName, isLoaded }) => {
  return (
    <div className="container">
      {!isLoaded ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setCountryName("");
            }}
          >
            Back
          </button>
          <div className="country-detail">
            <div>
              <img src={data[0].flag} alt="country" />
            </div>
            <div>
              <h3>{data[0].name}</h3>
              <p>
                <span>Native name:</span> {data[0].nativeName}
              </p>
              <p>
                <span>Population: </span>{" "}
                {data[0].population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <p>
                <span>Region: </span>
                {data[0].region}
              </p>
              <p>
                <span>Sub Region: </span>
                {data[0].subregion}
              </p>
              <p>
                <span>Capital: </span> {data[0].capital}
              </p>
            </div>

            <div className="top-domains">
              <br />
              <br />
              <div>
                <p>
                  <span>Top Level Domain:</span> {data[0].topLevelDomain}
                </p>
                <p>
                  <span>Currencies: </span>
                  {data[0].currencies[0].code}
                </p>
                <div className="Languages">
                  <span> Languages:</span>
                  {data[0].languages.map((lang, index) => lang.name).join(", ")}
                </div>
              </div>

              <div>
                <p>sadadas</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;

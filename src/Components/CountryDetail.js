import React from "react";

const CountryDetail = ({ data, setCountryName, isLoaded }) => {
  return (
    <div>
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
          <div>{data[0].name}</div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;

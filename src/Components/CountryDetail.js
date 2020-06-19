import React from "react";

const CountryDetail = ({
  data,
  setCountryName,
  isLoaded,
  borderData,
  setShowSearchAndFilter,
  showSearchAndFilter,
}) => {
  return (
    <div className="">
      {!isLoaded ? (
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <button
            className="btn-back"
            onClick={() => {
              setCountryName("");
              setShowSearchAndFilter(!showSearchAndFilter);
            }}
          >
            Back
          </button>

          <div className="country-detail">
            <div>
              <div>
                <img src={data[0].flag} alt="country" />
              </div>
            </div>

            <div className="details">
              <div>
                <h2>{data[0].name}</h2>
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
                    {data[0].languages.map((lang) => lang.name).join(", ")}
                  </div>
                </div>
              </div>
              <div className="borders">
                <span>{data[0].borders.length === 0 ? "" : "Borders: "}</span>
                {data[0].borders.slice(0, 3).map((border, index) => {
                  borderData.forEach((country) => {
                    if (country.alpha3Code.includes(border)) {
                      border = country.name;
                    }
                  });
                  return (
                    <button
                      key={index}
                      value={border}
                      onClick={(e) => {
                        setCountryName(e.target.value);
                      }}
                    >
                      {border}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;

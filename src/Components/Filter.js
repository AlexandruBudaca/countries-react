import React from "react";

const Filter = ({ handleRegion }) => {
  return (
    <div className="filter">
      <select onChange={handleRegion}>
        <option default value="">
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;

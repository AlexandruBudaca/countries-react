import React from "react";

const Search = ({ setSearchCountry }) => {
  return (
    <div className="search">
      <i id="magnify" class="fas fa-search"></i>
      <input
        placeholder="Search"
        onChange={(e) => {
          setSearchCountry(e.target.value);
        }}
      ></input>
    </div>
  );
};
export default Search;

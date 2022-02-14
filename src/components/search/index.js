import React, { useState } from "react";
import "./index.scss";

const Search = ({ searching }) => {
  const [searchText, setSearch] = useState("");
  const searchCard = (e) => {
    e.preventDefault();
    searching(searchText);
  };
  return (
    <form
      className="search"
      onSubmit={(e) => {
        searchCard(e);
      }}
    >
      <button className="search__btn">
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        className="search__inp"
        placeholder="Qidiruv"
        onInput={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
    </form>
  );
};

export default Search;

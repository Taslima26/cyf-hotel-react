import React, { useState, useEffect, useRef } from "react";
import SearchButton from "./SearchButton";
import "./Search.css";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSearchInput = event => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
    event.preventDefault();
  };
  const handleSearch = event => {
    event.preventDefault();
    search(searchInput);
    setSearchInput("");
  };

  return (
    <div className="form-group">
      <div>
        <h4>Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onChange={handleSearch}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                ref={inputRef}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />
            </div>
            <SearchButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

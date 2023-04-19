import React, { useState } from "react";

import SearchItem from "../../../components/Search/SearchResult";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search.css";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="container form-container">
      <form action="" className="form-search">
        <div className="form-search-container">
          <input
            value={searchValue}
            onChange={(e) => searchValue(e.target.value)}
            type="text"
            placeholder="Search..."
          />
          <button className="form-search-clear">
            <FontAwesomeIcon
              className="form-search-icon-xmark"
              icon={faCircleXmark}
            />
          </button>
          <button className="form-search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;

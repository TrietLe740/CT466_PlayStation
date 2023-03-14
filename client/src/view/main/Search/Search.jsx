import React, { useEffect, useState } from "react";

import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import SearchItem from "../../../components/Search/SearchResult";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search.css";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  return (
    // <div className="form-search">
    //   <Input.Search placeholder="Search..." enterButton />
    // </div>

    <div className="container form-container">
      <Tippy
        interactive={true}
        visible={searchResult.length > 0}
        render={(attrs) => (
          <div className="search-result" tabIndex="-1" {...attrs}>
            <SearchItem />
          </div>
        )}
        className="form-search-container"
      >
        <input
          value={searchValue}
          onChange={(e) => searchValue(e.target.value)}
          type="text"
          placeholder="Search..."
        />
        {!!searchValue && (
          <button className="form-search-clear">
            <FontAwesomeIcon
              className="form-search-icon-xmark"
              icon={faCircleXmark}
            />
          </button>
        )}
        <button className="form-search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </Tippy>
    </div>
  );
}

export default Search;

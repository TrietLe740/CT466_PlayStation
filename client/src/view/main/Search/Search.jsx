import React, { useState } from "react";
import SearchService from "../../../services/search.service";

import SearchItem from "../../../components/Search/SearchResult";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search.css";

function Search() {
  const searchServ = new SearchService();
  const [searchList, setSearchList] = useState();

  async function handleSubmit(data) {
    const searchResult = await searchServ.search(data);
    console.log(searchResult);
    setSearchList(searchResult);
  }

  return (
    <div className="container form-container">
      <form
        action=""
        className="form-search"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e.target[0]?.value);
        }}
      >
        <div className="form-search-container">
          <input type="text" placeholder="Search..." />
          <button type="submit" className="form-search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
      <div className="searchResultTable">
        <table className="table">
          <tbody>
            {searchList?.hardware &&
              searchList?.hardware.map((value, index) => {
                if (value.type === "hardware") {
                  return (
                    <SearchItem
                      key={index}
                      searchValue={value}
                      type={"hardware"}
                    />
                  );
                } else if (value.type === "accessory") {
                  return (
                    <SearchItem
                      key={index}
                      searchValue={value}
                      type={"accessory"}
                    />
                  );
                }
              })}
            {searchList?.game &&
              searchList?.game.map((value, index) => {
                return (
                  <SearchItem key={index} searchValue={value} type={"game"} />
                );
              })}
            {searchList?.new &&
              searchList?.new.map((value, index) => {
                return (
                  <SearchItem key={index} searchValue={value} type={"new"} />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Search;

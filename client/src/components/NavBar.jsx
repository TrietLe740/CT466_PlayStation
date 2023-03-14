import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import LOGO from "../assets/Logo.png";

export default function NavBar() {
  return (
    <nav className="navbar nav">
      <div className="inner container">
        <Link className="logo" to={`/`}>
          <img className="logo-img" src={LOGO} alt="logo" />
        </Link>
        <div className="main-nav">
          <Link to={`/`}>Home</Link>
          <Link to={`/games`}>Games</Link>
          <Link to={`/playstation`}>PlayStation</Link>
          <Link to={`/accessory`}>Accessory</Link>
          <Link to={`/news`}>News</Link>
        </div>
        <div className="action">
          <Link to={`/search`} className="search-btn btn-border">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
          <Link to={`/cart`} className="cart-btn btn-border">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <button className="user-btn btn">
            <span>Login</span>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
    </nav>
  );
}

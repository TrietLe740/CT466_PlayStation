import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
        <button className="user-btn btn">
          <span>Login</span>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </nav>
  );
}

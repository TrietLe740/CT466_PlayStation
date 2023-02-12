import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/Logo.png";

export default function NavBar() {
  return (
    <nav className="navbar nav">
      <ul className="main-nav">
        <li>
          <Link to={`/games`}>Games</Link>
        </li>
        <li>
          <Link to={`/hardware`}>Hardware</Link>
        </li>
        <li>
          <Link to={`/`}>
            <img className="logo-img" src={LOGO} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to={`/news`}>News</Link>
        </li>
        <li>
          <Link to={`/shop`}>Shop</Link>
        </li>
      </ul>
    </nav>
  );
}

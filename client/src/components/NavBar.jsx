import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import LOGO from "../assets/Logo.png";
import Context from "../store/Context";

export default function NavBar() {
  const { isLogin, setIsLogin, setAuth } = useContext(Context);

  const handleLogout = async () => {
    setIsLogin(false);
    setAuth({});
  };

  useEffect(() => {
    if (isLogin) {
      document.querySelector(".log-btn").innerHTML = "Logout";
    } else {
      document.querySelector(".log-btn").innerHTML = "Login";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

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
          <Link to={`/login`} className="user-btn btn" onClick={handleLogout}>
            <span className="log-btn"></span>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import LOGOWHITE from "../assets/Logo_white.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <img src={LOGOWHITE} alt="logo" />
        <h2 className="name-store">TLStore</h2>
      </div>
      <div className="footer-right">
        <ul>
          <li>
            <a href="/#">Support</a>
          </li>
          <li>
            <a href="/#">Privacy policy</a>
          </li>
          <li>
            <a href="/#">Website terms of use</a>
          </li>
          <li>
            <a href="/#">PlayStation and the environment</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/#">PSN terms of service</a>
          </li>
          <li>
            <a href="/#">PS Store cancellation policy</a>
          </li>
          <li>
            <a href="/#">About ratings</a>
          </li>
          <li>
            <a href="/#">Press release</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/#">Facebook</a>
          </li>
          <li>
            <a href="/#">Youtube</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

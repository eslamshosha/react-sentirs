import React from "react";
import { Link } from "react-router-dom";
//dasfadsfdsa
const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar">
          <a href="#!">
            <img src=""></img>
          </a>
          <div className="input-section">
            <input type="text"></input>
          </div>
        </div>
        <ul className="big-menu">
          <li>
            <Link className="cat-anchor" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="cat-anchor" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

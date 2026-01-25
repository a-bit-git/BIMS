import React from "react";
import "../index.css";
import logo from "../utilities/bslogo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Bookstore Logo" className="logo" />
        <span className="title">Bookstore</span>
      </div>

      <ul className="nav-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </header>
  );
};

export default Header;

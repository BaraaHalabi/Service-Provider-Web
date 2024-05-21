// NavBar.js
import React from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./style.css";
import "../../index.css";

function NavBar() {
  return (
    <nav className="nav">
      <div className="routes">
        <div className="left-links">
          <div>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/#about" className="nav-link">
              About us
            </NavLink>
            <NavLink to="/#services" className="nav-link">
              Services
            </NavLink>
          </div>
        </div>
        <div className="right-links">
          <RouterLink to="/login" target="_blank" className="sign-up-link">
            Login
          </RouterLink>
        </div>
      </div>
      <img className="nav-logo" src={logo} alt="Logo" />
    </nav>
  );
}

export default NavBar;

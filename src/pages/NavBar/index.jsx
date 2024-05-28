import React from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./style.css";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../auth.js";

function NavBar({ isLoggedIn, toggleLoginStatus, handleLogout }) {
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
          {!isLoggedIn ? (
            <RouterLink to="/login" className="sign-up-link">
              Login
            </RouterLink>
          ) : (
            <>
              <FontAwesomeIcon icon={faUser} onClick={toggleLoginStatus} />
              {isLoggedIn && (
                <div className="dropdown-menu" style={{ position: "relative" }}>
                  <button
                    onClick={handleLogout}
                    style={{
                      backgroundColor: "#f8f9fa",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Log Out
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <img className="nav-logo" src={logo} alt="Logo" />
    </nav>
  );
}

export default NavBar;

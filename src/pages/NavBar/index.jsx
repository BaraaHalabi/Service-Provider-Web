import React, { useState, useEffect, useRef } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./style.css";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"; // Use faUserCircle for the profile icon
import { useAuth } from "../../auth.js";

function NavBar({ isLoggedIn, handleLogout }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    if (dropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);

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
            <div className="dropdown-container" ref={dropdownRef}>
              <FontAwesomeIcon
                icon={faUserCircle}
                onClick={toggleDropdown}
                className="user-icon"
              />
              {dropdownVisible && (
                <ul className="dropdown-menu">
                  <li>
                    <button
                      onClick={() => {
                        closeDropdown();
                        // Add navigation to profile page if needed
                      }}
                    >
                      Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        closeDropdown();
                        handleLogout();
                      }}
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
      <img className="nav-logo" src={logo} alt="Logo" />
    </nav>
  );
}

export default NavBar;

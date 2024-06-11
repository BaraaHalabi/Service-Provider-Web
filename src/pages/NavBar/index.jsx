import React, { useState, useEffect, useRef } from "react";
import { Link as RouterLink, NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import "./style.css";
import "../../index.css";
import userIcon from "../../img/userDefaultImage.png";
import { useAuth } from "../../auth";
function NavBar() {
  const { isLoggedIn } = useAuth();

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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

  const handleProfileClick = () => {
    closeDropdown();
    navigate("/user-profile");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

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
              {/* <FontAwesomeIcon
                icon={faUserCircle}
                onClick={toggleDropdown}
                className="user-icon"
              /> */}
              <img
                src={userIcon}
                className="user-image"
                alt="profile"
                onClick={toggleDropdown}
              />
              {dropdownVisible && (
                <ul className="dropdown-menu">
                  <li>
                    <button onClick={handleProfileClick}>Profile</button>
                  </li>
                  <li>
                    <button onClick={handleLogoutClick}>Log Out</button>
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

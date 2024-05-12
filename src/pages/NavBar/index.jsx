import React from "react";
import { Link } from "react-scroll";
import logo from "../../img/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
//   faWhatsapp as faWhatsappBrand,
//   faInstagram as faInstagramBrand,
//   faLinkedin as faLinkedinBrand,
// } from "@fortawesome/free-brands-svg-icons";
import "./style.css";
import "../../index.css";
import { Link as RouterLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="nav">
      <div className="routes">
        <div className="left-links">
          <div>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={50}
            >
              Home
            </Link>
            <Link to="about" spy={true} smooth={true} duration={50}>
              About us
            </Link>
            <Link to="services" spy={true} smooth={true} duration={50}>
              Services
            </Link>
            <Link to="communication" spy={true} smooth={true} duration={200}>
              Contact us
            </Link>
          </div>

          <img src={logo} alt="Logo" />
        </div>
        <div className="right-links">
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/sign-up" className="sign-up-link">
            Sign Up
          </RouterLink>
        </div>
      </div>

      <img className="nav-logo" src={logo} alt="Logo" />
    </nav>
  );
}

export default NavBar;

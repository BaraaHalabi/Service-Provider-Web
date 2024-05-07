import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavigationBar = ({ logo }) => {
  return (
    <nav>
      <div className="routes">
        <Link to="#home" spy={true} smooth={true} duration={500}>
          Home
        </Link>
        <Link to="#about" spy={true} smooth={true} duration={500}>
          About us
        </Link>
        <Link to="#services" spy={true} smooth={true} duration={500}>
          Services
        </Link>
        <Link to="#communication" spy={true} smooth={true} duration={500}>
          Contact us
        </Link>
      </div>

      <img className="nav-logo" src={logo} alt="Logo" />
    </nav>
  );
};

export default NavigationBar;

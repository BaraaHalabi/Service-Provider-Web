import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import logo from "./img/logo.png";

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <div className="routes">
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

        <img className="nav-logo" src={logo} alt="Logo" />
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;

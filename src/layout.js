import React from "react";
import { Link } from "react-scroll";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp as faWhatsappBrand,
  faInstagram as faInstagramBrand,
  faLinkedin as faLinkedinBrand,
} from "@fortawesome/free-brands-svg-icons";
import { Link as RouterLink } from "react-router-dom"; // Rename to avoid confusion with react-scroll Link
const Layout = ({ children }) => {
  const handleReferencesClick = () => {
    console.log("References clicked");
  };
  return (
    <>
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

      <main>{children}</main>

      <footer className="footer">
        {/* <div>
          <h3 className="head-title">
            <span className="dot white"></span>Location
          </h3>
          <img src="assets/img/world_map.png" alt="world map" />
        </div>
        <div>
          <h3 className="head-title">
            <span className="dot white"></span>Contact
          </h3>
          <a href="tel:+902164226103">
            <FontAwesomeIcon icon={faPhone} /> +90 216 422 61 03
          </a>
          <a href="https://api.whatsapp.com/send?phone=905495474085">
            <FontAwesomeIcon icon={faWhatsappBrand} /> +90 549 547 40 85
          </a>
          <a href="mailto:info@smiletransport.com.tr">
            <FontAwesomeIcon icon={faEnvelope} /> info@smiletransport.com.tr
          </a>
        </div>
        <div>
          <h3 className="head-title">
            <span className="dot white"></span>Keep in Touch
          </h3>
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="https://www.instagram.com/transport.smile/">
              <FontAwesomeIcon icon={faInstagramBrand} />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-profile/">
              <FontAwesomeIcon icon={faLinkedinBrand} />
            </a>
          </div>
        </div>
        <div>
          <h3 onClick={handleReferencesClick} className="head-title">
            <span className="dot white"></span>References
          </h3>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=905495474085"
          className="whatsapp-button"
        >
          X
        </a> */}
      </footer>
    </>
  );
};

export default Layout;

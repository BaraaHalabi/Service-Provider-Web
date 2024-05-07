import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faWhatsapp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp as faWhatsappBrand,
  faInstagram as faInstagramBrand,
  faLinkedin as faLinkedinBrand,
} from "@fortawesome/free-brands-svg-icons";

const FooterPage = () => {
  const handleReferencesClick = () => {
    console.log("References clicked");
  };

  return (
    <footer>
      <div>
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
      </a>
    </footer>
  );
};

export default FooterPage;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "../index.css";

function HomePage() {
  return (
    <section id="home">
      <div className="hero">
        <header>
          <div className="badge">
            <FontAwesomeIcon icon={faPhone} />
            <div>
              <span>Phone</span>
              <br />
              <a href="tel:+963940371512">+963 940 371 512</a>
            </div>
          </div>
          <div className="badge">
            <FontAwesomeIcon icon={faLocationDot} />
            <div>
              <span>Location</span>
              <br />
              <a href="xxxxx">Damascus</a>
            </div>
          </div>
        </header>
        <h4>
          <span className="dash"></span> Service Station
        </h4>
        <h1>
          <span>Easy to implement</span>
          <br />
          Web Services
        </h1>
        <p>
          Streamline your online presence with our tailored web solutions. From
          design to development, we're your digital partner for success.
        </p>
        <footer>
          <div className="badge">
            <FontAwesomeIcon icon={faGlobe} />
            Web services
          </div>
        </footer>
      </div>
    </section>
  );
}

export default HomePage;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
import "./style.css";
import Hero from "../../img/hero.webp";
function HomePage() {
  return (
    <section id="home">
      <div className="hero">
        <h3>
          <span className="dash"></span>Service Station
        </h3>
        <h1>
          <span>Optimize Your Website</span>
          <br /> Dynamic, Effective.
        </h1>
        <p>
          Enhance your website effortlessly with our dynamic platform that
          offers tailored functionalities, enabling you to easily integrate
          essential services
        </p>
        {/* <footer>
          <div className="badge">
            <FontAwesomeIcon icon={faGlobe} /> Web services
          </div>
        </footer> */}
      </div>
      <div className="image-container">
        {/* hero */}
        <img src={Hero} alt="" />
      </div>
    </section>
  );
}

export default HomePage;

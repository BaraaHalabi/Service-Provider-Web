import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
import "./style.css";
import Hero from '../../img/hero.webp';
function HomePage() {
  return (
    <section id="home">
      <div className="hero">
        <h1>
          <span>Easy to implement</span>
          <br />
          Web Services
        </h1>
        <p>
          Streamline your online presence with our tailored web solutions. From
          design to development, we're your digital partner for success.
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nesciunt iure consectetur atque reiciendis reprehenderit odit rerum beatae quaerat similique minus inventore, soluta doloribus voluptates. */}
        </p>
        <h4>
          <span className="dash"></span> <div className="badge">Service Station</div>
        </h4>
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

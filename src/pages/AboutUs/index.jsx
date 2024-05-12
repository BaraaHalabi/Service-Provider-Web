import React from "react";
import {
  faHandshake,
  faShield,
  faMoneyBillWaveAlt,
} from "@fortawesome/free-solid-svg-icons"; // Import the icons
import "../../index.css"; // Consider using CSS Modules or styled-components for scoped CSS
import aboutus from "../../img/about.png";
import Guarantee from "../../components/guarantee"; // Adjust the import path as necessary
import "./style.css";
function AboutUsPage() {
  return (
    <div>
      <section id="about">
        <div className="about-us">
          <div style={{ flex: 1 }}>
            <h3>
              <span className="dash"></span>Service Station
            </h3>
            <h1>
              <span className="dot"></span>About us
            </h1>
            <h2>Easy to implement web services</h2>
            <p>
              At Servicely, we're dedicated to crafting exceptional online
              experiences. With a team of creative designers and skilled
              developers, we deliver bespoke web solutions tailored to your
              needs.
              <br />
              <br />
              From sleek websites to powerful e-commerce platforms, we're here
              to elevate your digital presence and drive growth for your
              business.
            </p>
          </div>
          <div className="image">
            <img src={aboutus} alt="People jumping on websites" />
          </div>
        </div>
        <div className="guarantees">
          <Guarantee title="Trust" icon={faHandshake}>
            Trust is our cornerstone. We prioritize transparency, reliability,
            and integrity in every interaction, ensuring client satisfaction and
            success.
          </Guarantee>
          <Guarantee title="Security" icon={faShield}>
            Security is paramount. We employ industry-leading measures to
            safeguard your data, ensuring confidentiality and peace of mind.
          </Guarantee>
          <Guarantee title="Affordable" icon={faMoneyBillWaveAlt}>
            Affordability is key. We offer competitive rates without
            compromising quality, making top-notch web services accessible to
            all.
          </Guarantee>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;

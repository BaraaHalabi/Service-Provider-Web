import React from "react";
import {
  faClock,
  faDollarSign,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";

import aboutus from "../../img/about.webp";
import Guarantee from "../../components/guranatees/guarantee";
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
              At Service Station, we're dedicated to crafting exceptional online
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
          <Guarantee title="Cost-Effective" icon={faDollarSign}>
            We strive to offer our services at competitive prices without
            compromising quality, ensuring value for money.
          </Guarantee>
          <Guarantee title="Efficient Time Management" icon={faClock}>
            Our processes are designed to be efficient, saving you time and
            ensuring your projects are completed promptly.
          </Guarantee>
          <Guarantee title="Smooth Integration" icon={faPlug}>
            We ensure seamless integration of our services with your existing
            systems, minimizing disruption and maximizing benefits.
          </Guarantee>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;

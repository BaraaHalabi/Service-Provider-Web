import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faCodepen,
  faDribbble,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function ContactUsPage() {
  return (
    <section id="communication">
      <div className="contact-us-page">
        <ul>
          {/* Use Link for internal navigation */}
          <li>
            <Link
              to="/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter profile"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check out our Codepen projects"
            >
              <FontAwesomeIcon icon={faCodepen} />
            </Link>
          </li>
          {/* Use standard <a> tag for external links like email */}
          <li>
            <a
              href="mailto:julesforrest@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} aria-label="Email us" />
            </a>
          </li>
          <li>
            <Link
              to="/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our Dribbble portfolio"
            >
              <FontAwesomeIcon icon={faDribbble} />
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore our GitHub repositories"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ContactUsPage;

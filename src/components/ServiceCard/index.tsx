
import React from "react";
import "./style.css";

const ServiceCard = ({ title, imageSrc, status, description }) => {
  return (
    <li>
      <a href="" className="card">
        <img src={imageSrc} className="card__image" alt={title} />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="card__thumb"
              src="https://i.imgur.com/7D7I6dI.png"
              alt=""
            />
            <div className="card__header-text">
              <h3 className="card__title">{title}</h3>
              <span className="card__status">{status}</span>
            </div>
          </div>
          <p className="card__description">{description}</p>
        </div>
      </a>
    </li>
  );
};

export default ServiceCard;

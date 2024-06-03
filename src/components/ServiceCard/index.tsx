import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ServiceCard = ({ title, imageSrc, status, description, slug }) => {
  return (
    <Link to={`/services/${slug}`} className="card">
      {" "}
      <img src={imageSrc} className="card__image" alt={title} />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
       
          <div className="card__header-text">
            <h3 className="card__title">{title}</h3>
            <span className="card__status">{status}</span>
          </div>
        </div>
        <p className="card__description">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;

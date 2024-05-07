// ServiceCard.js
import React from "react";

function ServiceCard({ imgSrc, title, description }) {
  return (
    <div className="service-card">
      <header>
        <img src={imgSrc} alt={title} />
      </header>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;

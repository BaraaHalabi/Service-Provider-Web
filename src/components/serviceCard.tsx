import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface ServiceCardProps {
  imgSrc: string;
  title: string;
  description?: string;
  slug: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imgSrc,
  title,
  description,
  slug,
  price,
}) => {
  return (
    <RouterLink to={`/services/${slug}`} className="service-card">
      <img src={imgSrc} alt={title} />
      <div>
        <h3>{title}</h3>
        {description && <p className="description-font">{description}</p>}
        <p className="price">{price}</p>
      </div>
    </RouterLink>
  );
};

export default ServiceCard;

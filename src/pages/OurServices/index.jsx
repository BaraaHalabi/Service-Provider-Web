// OurServicesPage.js
import React from "react";
import ServiceCard from "../../components/ServiceCard/index.tsx"; // Ensure this path is correct
import services from "../../components/servicesData.js";
import "./style.css";
import { Link as RouterLink } from "react-router-dom";

function OurServicesPage() {
  const limitedServices = services.slice(0, 3);

  return (
    <section id="services">
      <header>
        <h3>
          <span className="dash"></span>Service Station
        </h3>
        <h1>
          <span className="dot"></span>Our Services
        </h1>
      </header>
      <ul className="cards">
        {limitedServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            imageSrc={service.imgSrc}
            description={service.description}
            slug={service.slug}
          />
        ))}
      </ul>
      <div
        style={{ textAlign: "right", marginRight: "20px", marginTop: "10px" }}
      >
        <RouterLink to="/more-services" className="see-more-link">
          See More
        </RouterLink>
      </div>
    </section>
  );
}

export default OurServicesPage;

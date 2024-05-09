// OurServicesPage.js
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ServiceCard from "../components/serviceCard.tsx";
import services from "../components/servicesData";

function OurServicesPage() {
  return (
    <section id="services">
      <header>
        <h2>
          <span className="dash"></span>Service Station
        </h2>
        <h1>
          <span className="dot"></span>Our Services
        </h1>
      </header>
      <div className="our-services">
        {services.slice(0, 3).map((service) => (
          <ServiceCard
            key={service.title}
            imgSrc={service.imgSrc}
            title={service.title}
            slug={service.slug}
            price={service.price}
          />
        ))}
      </div>
      <div className="curve"></div>
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

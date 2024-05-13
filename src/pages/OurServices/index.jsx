// OurServicesPage.js
import React from "react";
import ServiceCard from "../../components/ServiceCard/index.tsx"; // Ensure this path is correct
import "./style.css";
import { Link as RouterLink } from "react-router-dom";
const services = [
  {
    title: "Jessica Parker",
    imageSrc: "https://i.imgur.com/oYiTqum.jpg",
    status: "1 hour ago",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?",
  },
  {
    title: "kim Cattrall",
    imageSrc: "https://i.imgur.com/2DhmtJ4.jpg",
    status: "3 hours ago",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?",
  },
  {
    title: "Another Service",
    imageSrc: "https://i.imgur.com/2DhmtJ4.jpg",
    status: "2 hours ago",
    description: "Another service description.",
  },
];

function OurServicesPage() {
  const limitedServices = services.slice(0, 3);

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
      <ul className="cards">
        {limitedServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            imageSrc={service.imageSrc}
            status={service.status}
            description={service.description}
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

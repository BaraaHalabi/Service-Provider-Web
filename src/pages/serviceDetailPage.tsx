import React from "react";
import { useParams } from "react-router-dom";
import services from "../components/servicesData"; // Adjust the path as necessary
import Layout from "../layout";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug); // Find the service by slug

  if (!service) {
    return <p>Service not found!</p>;
  }

  return (
    <Layout>
      <div className="service-detail-page">
        <div className="title-description-container">
          <h1>{service.title}</h1>
          <div className="service-details">
            <figure>
              <div className="service-description">
                <img src={service.imgSrc} alt={service.title} />
                <p>{service.description}</p>
              </div>
              <figcaption className="service-price">
                Price: {service.price}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetailPage;

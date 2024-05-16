// MoreServicesPage.js
import React from "react";
import ServiceCard from "../../components/ServiceCard/index.tsx";
import Layout from "../../layout.js";
import "./style.css";
import services from "../../components/servicesData.js";

const MoreServicesPage = () => {
  const limitedServices = services.slice(0, 9);

  return (
    <Layout>
      <div id="more-services">
        <div className="services-grid">
          {limitedServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageSrc={service.imgSrc}
              status={service.status}
              description={service.description}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MoreServicesPage;

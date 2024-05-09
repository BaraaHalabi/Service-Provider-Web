// MoreServicesPage.js
import React from "react";
import ServiceCard from "../components/serviceCard.tsx";
import services from "../components/servicesData.js";
import Layout from "../layout";
const MoreServicesPage = () => {
  return (
    <Layout>
      <div id="more-services">
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              imgSrc={service.imgSrc}
              title={service.title}
              slug={service.slug}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MoreServicesPage;

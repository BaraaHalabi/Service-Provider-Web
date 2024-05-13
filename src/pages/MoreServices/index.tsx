// MoreServicesPage.js
import React from "react";
import ServiceCard from "../../components/ServiceCard/index.tsx";
import Layout from "../../layout.js";
import "./style.css";

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
              imageSrc={service.imageSrc}
              status={service.status}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MoreServicesPage;

import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import Layout from "../../layout";
import "./style.css";
import services from "../../components/servicesData";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <p>Service not found!</p>;
  }

  const handleBuyNowClick = () => {
    // Navigate to the PaymentPage
    navigate("/payment"); // Use navigate instead of history.push
  };

  return (
    <Layout>
      <div className="wrapper">
        <div className="product-img">
          <img
            src={service.imgSrc}
            alt={service.title}
            height="420"
            width="327"
          />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>

          <div className="product-price-btn">
            <p className="price">{service.price}</p>
            <button type="button" onClick={handleBuyNowClick}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetailPage;

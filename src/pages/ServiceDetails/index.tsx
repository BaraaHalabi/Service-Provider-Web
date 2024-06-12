import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ServiceDetailPage.module.css";

import whiteBoardImg from "../../img/whiteboarding.png";
import SocialMediaImg from "../../img/SocialMedia.png";

const imageMapping: { [key: string]: string } = {
  "Analytics Service": whiteBoardImg,
  "Chatbot Service": SocialMediaImg,
  "Payment Service": whiteBoardImg,
  "Link Tree Service": whiteBoardImg,
  "Register,Login Service": whiteBoardImg,
  "ShortLink Service": whiteBoardImg,
  "Whiteboard Service": SocialMediaImg,
  "Social Media Management Service": SocialMediaImg,
  "Loading Screen Service": SocialMediaImg,
};

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  imgSrc: string;
  slug: string;
}

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<number>(1);

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://127.0.0.1:8000/api/services");
        const services = await response.json();

        if (!Array.isArray(services)) {
          throw new Error("Fetched data is not an array");
        }

        const foundService = services.find(
          (s: any) => generateSlug(s.name) === slug
        );
        if (foundService) {
          setService({
            ...foundService,
            imgSrc: imageMapping[foundService.name] || whiteBoardImg,
            price: foundService.price,
          });
        } else {
          setError("Service not found!");
        }
      } catch (error) {
        setError("Error fetching service details!");
      }
      setLoading(false);
    };

    fetchService();
  }, [slug]);

  const handleBuyNowClick = async () => {
    const token = localStorage.getItem("token");

    if (service) {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/create_invoice",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              order_id: orderId,
              price_amount: service.price,
              order_description: service.name,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to create invoice");
        }

        const data = await response.json();

        setOrderId(orderId + 1);

        if (data.invoice_url) {
          // window.location.href = data.invoice_url;
          window.location.href = "http://localhost:3000/doc-page/";
        } else {
          throw new Error("Invoice URL not found in response");
        }
      } catch (error) {
        setError("Error creating invoice");
        console.error("Error:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="service-details-page">
      {service && (
        <div className={styles.roundedBackgroundBox}>
          <div className={styles.leftRoundedColumn}>
            <div className={styles.product}>
              <img
                className={`${styles.tablet} ${styles.float}`}
                src={service.imgSrc}
                alt={service.name}
              />
            </div>
          </div>
          <div className={styles.rightRoundedColumn}>
            <div className={styles.productInfo}>
              <h1>{service.name}</h1>
              <p>{service.description}</p>
            </div>
            <div className={styles.cartPrice}>
              <h2>${service.price}/month</h2>
              <button className={styles.button} onClick={handleBuyNowClick}>
                Buy Now!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailPage;

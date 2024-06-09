import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout";
import styles from "./ServiceDetailPage.module.css";
import whiteBoardImg from "../../img/whiteboarding.png";
import socialmediaImg from "../../img/socialmedia.jpg";
import chatImg from "../../img/chat.png";

const imageMapping: { [key: string]: string } = {
  "Analytics Service": whiteBoardImg,
  "Chat Service": chatImg,
  "Payment Service": whiteBoardImg,
  "Link Tree Service": whiteBoardImg,
  "Register,Login Service": whiteBoardImg,
  "ShortLink &Ads Service": whiteBoardImg,
  "Bucket Service": whiteBoardImg,
  "Whiteboard Service": socialmediaImg,
  "Social Media Management": socialmediaImg, // New service added
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
            price: foundService.price, // Assuming price is already in correct format
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

  if (loading) {
    return <p>Loading...</p>;
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
              <button className={styles.button}>Buy Now!</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailPage;

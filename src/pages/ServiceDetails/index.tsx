import React from "react";
import { useParams } from "react-router-dom";
import services from "../../components/servicesData";
import Layout from "../../layout";
import styles from "./ServiceDetailPage.module.css";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <p>Service not found!</p>;
  }

  return (
    <div className={styles.roundedBackgroundBox}>
      <div className={styles.leftRoundedColumn}>
        <div className={styles.product}>
          <img
            className={`${styles.tablet} ${styles.float}`}
            src={service.imgSrc}
            alt={service.title}
          />
        </div>
      </div>
      <div className={styles.rightRoundedColumn}>
        <div className={styles.productInfo}>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
        <div className={styles.cartPrice}>
          <h2>£{service.price}</h2>
          <button className={styles.button}>Buy Now!</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;

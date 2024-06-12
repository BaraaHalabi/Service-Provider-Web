import React, { useState, useEffect } from "react";
import ServiceCard from "../../components/ServiceCard/index.tsx";
import "./style.css";
import whiteBoardImg from "../../img/whiteboarding.png";
import socialmediaImg from "../../img/SocialMedia.png";
import axios from "axios";

const imageMapping = {
  "Analytics Service": whiteBoardImg,
  "Chat Service": socialmediaImg,
  "Payment Service": whiteBoardImg,
  "Link Tree Service": whiteBoardImg,
  "Register,Login Service": whiteBoardImg,
  "ShortLink &Ads Service": whiteBoardImg,
  "Bucket Service": whiteBoardImg,
  "Whiteboard Service": socialmediaImg,
};

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

function OurServicesPage() {
  const [displayedServices, setDisplayedServices] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const [showLessVisible, setShowLessVisible] = useState(false);
  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/services");
        const services = response.data;
        const mappedServices = services.map((service) => ({
          imgSrc: imageMapping[service.name] || whiteBoardImg,
          title: service.name,
          description: service.description,
          slug: generateSlug(service.name),
          price: `$${service.price}/month`,
        }));
        setAllServices(mappedServices);
        setDisplayedServices(mappedServices.slice(0, 3));
        setHasMore(mappedServices.length > 3);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
      setLoading(false);
    };

    fetchServices();
  }, []);

  const loadServices = async () => {
    setLoading(true);
    const newServices = allServices.slice(page * 3, (page + 1) * 3);
    setDisplayedServices((oldServices) => [...oldServices, ...newServices]);
    if ((page + 1) * 3 >= allServices.length) {
      setHasMore(false);
      setShowLessVisible(true);
    }
    setLoading(false);
    setPage((oldPage) => oldPage + 1);
  };

  const showLessServices = () => {
    setDisplayedServices(allServices.slice(0, 3));
    setPage(1);
    setShowLessVisible(false);
    setHasMore(allServices.length > 3);
  };

  return (
    <section id="services">
      <header>
        <h3>
          <span className="dash"></span>Service Station
        </h3>
        <h1>
          <span className="dot"></span>Our Services
        </h1>
      </header>
      <ul className="cards">
        {displayedServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            imageSrc={service.imgSrc}
            description={service.description}
            slug={service.slug}
            price={service.price}
          />
        ))}
      </ul>
      <div className="btn">
        {loading && <p>Loading...</p>}
        {!loading && hasMore && (
          <button onClick={loadServices} className="glow-on-hover">
            Load More
          </button>
        )}
        {!loading && showLessVisible && (
          <button onClick={showLessServices} className="glow-on-hover">
            Show Less
          </button>
        )}
      </div>
    </section>
  );
}

export default OurServicesPage;

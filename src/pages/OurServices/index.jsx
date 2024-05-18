import React, { useState } from "react";
import ServiceCard from "../../components/ServiceCard/index.tsx";
import services from "../../components/servicesData";
import "./style.css";

function OurServicesPage() {
  const [displayedServices, setDisplayedServices] = useState(
    services.slice(0, 3)
  );
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(services.length > 3);
  const [page, setPage] = useState(1);
  const [showLessVisible, setShowLessVisible] = useState(false);

  const loadServices = async (page) => {
    setLoading(true);
    const newServices = services.slice(page * 3, (page + 1) * 3);
    setDisplayedServices((oldServices) => [...oldServices, ...newServices]);
    if ((page + 1) * 3 >= services.length) {
      setHasMore(false);
      setShowLessVisible(true);
    }
    setLoading(false);
    setPage((oldPage) => oldPage + 1);
  };

  const showLessServices = () => {
    setDisplayedServices(services.slice(0, 3));
    setPage(1);
    setShowLessVisible(false);
    setHasMore(true);
  };

  const loadMoreServices = () => {
    if (hasMore) {
      loadServices(page);
    }
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
          <button onClick={loadMoreServices} className="glow-on-hover">
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

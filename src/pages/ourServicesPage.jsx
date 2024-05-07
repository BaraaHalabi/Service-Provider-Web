import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
import ServiceCard from "../components/serviceCard";
import whiteBoardImg from "../img/whiteboarding.png";
import analyticsImg from "../img/analytics.png";
import chatImg from "../img/chat.png";
import { useParams } from "react-router-dom";
function OurServicesPage() {
  // const navigate = useNavigate(); // Use the navigate function directly

  // const handleClick = () => {
  //   navigate("/all-services"); // Navigate to the desired page
  // };
  let { services } = useParams();

  return (
    <section id="services">
      <header>
        <h2>
          <span className="dash"></span>Servicely
        </h2>
        <h1>
          <span className="dot"></span>Services
        </h1>
      </header>
      <div className="our-services">
        <ServiceCard
          imgSrc={whiteBoardImg}
          title="Whiteboarding"
          description="Lorem ipsum..."
        />
        <ServiceCard
          imgSrc={analyticsImg}
          title="Analytics"
          description="Lorem ipsum..."
        />
        <ServiceCard
          imgSrc={chatImg}
          title="Chatting"
          description="Lorem ipsum..."
        />
      </div>

      {/* Remove the Link component and use a button or div styled as a link */}
      {/* <button onClick={handleClick} className="arrow-link">
        See More Services
      </button> */}
      <div className="curve"></div>
    </section>
  );
}

export default OurServicesPage;

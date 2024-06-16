import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./FAQPage.css";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the purpose of this website platform?",
      answer:
        "The aim of the project is to develop a versatile website platform that offers a variety of services to users, allowing them to easily select and integrate the specific services they require into their existing websites. This approach streamlines the process for website owners, empowering them to enhance their online presence with tailored functionalities without the need for extensive development work.",
    },
    {
      question: "How can I integrate services into my website?",
      answer:
        "Integrating services into your website is a simple process. Once you have selected the services you require, you can follow our step-by-step integration guide available on the platform. The guide provides detailed instructions on how to add functionalities to your website seamlessly.",
    },
    {
      question: "What types of services are available?",
      answer:
        "Our platform offers a wide range of services, including e-commerce solutions, content management systems, customer relationship management tools, and analytics dashboards. These services are designed to meet the diverse needs of website owners across various industries and sectors.",
    },
    {
      question: "Is extensive development work required to use the platform?",
      answer:
        "No, the platform is designed to minimize the need for extensive development work. You can easily select and integrate the services you need without requiring significant technical expertise, making it accessible for website owners of all skill levels.",
    },
    {
      question: "Can the platform be customized to fit my specific needs?",
      answer:
        "Yes, the platform offers a seamless and customizable solution that can be tailored to meet the unique requirements of your website. You can choose from a variety of services and configure them to align with your specific goals and objectives.",
    },
    {
      question: "What happens after I make a payment?",
      answer:
        "After you make a payment, we provide you with the necessary scripts and APIs to integrate the service you paid for into your website. This allows you to quickly and easily add the new functionality without extensive development work.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openFormInNewTab = () => {
    window.open("/feedback-form", "_blank");
  };

  return (
    <div className="faq-container">
      <div className="accordion__wrapper">
        <h1 className="accordion__title">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div className="accordion" key={index}>
            <div
              className="accordion__header"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="accordion__question">{faq.question}</h2>
              <span className="accordion__icon">
                <FontAwesomeIcon
                  icon={openIndex === index ? faMinus : faPlus}
                />
              </span>
            </div>
            <div
              className="accordion__content"
              style={{ height: openIndex === index ? "auto" : "0px" }}
            >
              <p className="accordion__answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="accordion__wrapper">
        <h3 className="accordion__title">
          Submit Your Question/Recommendation/Report an Issue
        </h3>
        <button onClick={openFormInNewTab} className="feedback-button">
          Submit{" "}
        </button>
      </div>
    </div>
  );
};

export default FAQPage;

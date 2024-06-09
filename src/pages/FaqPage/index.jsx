import React, { useState } from "react";
import FaqAccordion from "../../components/FaqAccordion";
import { findClosestQuestion } from "../../utils/faqMatcher";

const FaqPage = () => {
  const [userQuery, setUserQuery] = useState("");
  const [closestQuestion, setClosestQuestion] = useState("");

  const handleSearch = () => {
    const result = findClosestQuestion(userQuery);
    setClosestQuestion(result);
  };

  const faqs = [
    {
      question: "How can I reset my password?",
      answer:
        'You can reset your password by going to the settings page and clicking on "Reset Password".',
    },
    {
      question: "Where can I find the user manual?",
      answer:
        "The user manual is available in the help section of our website.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        'You can contact customer support by clicking on the "Contact Us" link on our website.',
    },
    {
      question: "What is your return policy?",
      answer:
        "Our return policy can be found in the terms and conditions section of our website.",
    },
    {
      question: "How can I track my order?",
      answer:
        'You can track your order by logging into your account and clicking on "Track Order".',
    },
  ];

  return (
    <div>
      <h1>FAQ Section</h1>
      <FaqAccordion faqs={faqs} />
      <div>
        <input
          type="text"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          placeholder="Ask a question"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {closestQuestion && (
        <div>
          <h2>Closest FAQ Question:</h2>
          <p>{closestQuestion}</p>
        </div>
      )}
    </div>
  );
};

export default FaqPage;

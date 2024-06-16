import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  useEffect(() => {
    // Initialize EmailJS with your User ID
    emailjs.init("Pn__uykX3OPYm-fpb");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackType: "Question",
    subject: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ayvijz",
        "template_r4zlyju",
        e.target,
        "Pn__uykX3OPYm-fpb"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Feedback sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred while sending feedback.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
    e.target.reset();
  };

  return (
    <div className="faq-container">
      <div className="accordion__wrapper">
        <h3 className="accordion__title">
          Submit Your Question/Recommendation/Report an Issue
        </h3>
        <form className="feedback-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label>Name (optional):</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email (required):</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Type of Feedback:</label>
            <select
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleInputChange}
            >
              <option value="Question">Question</option>
              <option value="Recommendation">Recommendation</option>
              <option value="Report an Issue">Report an Issue</option>
            </select>
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="feedback-button">
            Send Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;

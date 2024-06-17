import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  useEffect(() => {
    emailjs.init("Pn__uykX3OPYm-fpb");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [messageSent, setMessageSent] = useState(false);

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
          setMessageSent(true);
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
    <div id="feedback-form-container">
      
      <div className="wrap">
        <div className="feedback">
          <h1>Submit Your Feedback</h1>
          {messageSent && (
            <p className="success-message">Your message has been sent!</p>
          )}
          <form onSubmit={sendEmail}>
            <div className="row">
              <input
                type="text"
                id="text"
                className="row_input"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="text" className="label">
                Enter your name
              </label>
            </div>
            <div className="row">
              <input
                type="email"
                id="email"
                className="row_input"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="email" className="label">
                Your email address
              </label>
            </div>
            <div className="row">
              <textarea
                name="description"
                id="message"
                className="row_input"
                cols="30"
                rows="5"
                value={formData.description}
                onChange={handleInputChange}
                required
              ></textarea>
              <label htmlFor="message" className="label">
                Message
              </label>
            </div>
            <div className="row">
              <div className="button">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;

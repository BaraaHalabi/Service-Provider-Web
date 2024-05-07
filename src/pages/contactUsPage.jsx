import React from "react";
import { useParams } from "react-router-dom";
function ContactUsPage() {
  //   const [senderCountry, setSenderCountry] = useState("");
  //   const [recipientCountry, setRecipientCountry] = useState("");

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Handle form submission logic here
  //     console.log(`Sending from ${senderCountry} to ${recipientCountry}`);
  //   };

  return (
    <section id="communication">
      <div className="contact-info">
        <h3>
          <span className="dash"></span>Contact Us
        </h3>
        <h1>
          <span className="dot"></span>Get in Touch
        </h1>
      </div>
    </section>
  );
}

export default ContactUsPage;

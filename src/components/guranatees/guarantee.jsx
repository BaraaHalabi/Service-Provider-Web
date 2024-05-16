// Guarantees.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"; // Make sure the file extension matches your setup (e.g.,.ts,.tsx)

const Guarantee = ({ title, icon, children }) => (
  <div className="guarantee">
    <header>
      <h1>{title}</h1>
      <FontAwesomeIcon icon={icon} />
    </header>
    <p>{children}</p>
  </div>
);

export default Guarantee;

// Guarantees.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

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

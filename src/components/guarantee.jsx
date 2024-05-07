// Guarantees.js
import React from "react";
 
const Guarantee = ({ title, icon, children }) => (
  <div className="guarantee">
    <header>
      <h1>{title}</h1>
      <i className={icon}></i> {/* This line was incorrect */}
    </header>
    <p>{children}</p>
  </div>
);

export default Guarantee;

import React from "react";
import "./style.css";

function Seperator() {
  return (
    <svg className="editorial" viewBox="0 24 150 28" preserveAspectRatio="none">
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax1">
        <use xlinkHref="#gentle-wave" x="50" y="3" fill="#f095af" />
      </g>
      <g className="parallax2">
        <use xlinkHref="#gentle-wave" x="50" y="0" fill="#80afb4" />
      </g>
      <g className="parallax3">
        <use xlinkHref="#gentle-wave" x="50" y="9" fill="#ff9748" />
      </g>
      <g className="parallax4">
        <use xlinkHref="#gentle-wave" x="50" y="6" fill="#f6f6f8" />
      </g>
    </svg>
  );
}

export default Seperator;

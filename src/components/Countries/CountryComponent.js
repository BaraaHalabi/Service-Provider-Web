import React from "react";
import countryList from "./Countrylist";

const CountryComponent = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="select-page">
      <option value="">Select Country</option>
      {countryList.map((country, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default CountryComponent;

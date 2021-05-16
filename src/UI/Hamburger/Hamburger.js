import React from "react";
import "./Hamburger.css";

const Hamburger = (props) => {
  return (
    <svg
      className="Hamburger"
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        className="Bar1"
        x1="18"
        y1="25.5"
        x2="51"
        y2="25.5"
        stroke="black"
        stroke-width="3"
      />
      <line
        className="Bar2"
        x1="18"
        y1="41.5"
        x2="51"
        y2="41.5"
        stroke="black"
        stroke-width="3"
      />
    </svg>
  );
};

export default Hamburger;

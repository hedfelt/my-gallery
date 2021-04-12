import React from "react";
import "./Hamburger.css";

const Hamburger = (props) => {
  return (
    <svg
      className="Hamburger"
      // width="805"
      // height="740"
      viewBox="0 0 805 740"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="Bar1"
        x="220.5"
        y="345.5"
        width="360"
        height="49"
        rx="24.5"
        stroke="black"
      />
      <rect
        className="Bar2"
        x="102.5"
        y="538.5"
        width="599"
        height="49"
        rx="24.5"
        stroke="black"
      />
      <rect
        className="Bar3"
        x="102.5"
        y="152.5"
        width="599"
        height="49"
        rx="24.5"
        stroke="black"
      />
    </svg>
  );
};

export default Hamburger;

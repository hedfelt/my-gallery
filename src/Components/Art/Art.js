import React from "react";
import slott from "../../Images/slotnytt2.png";
import classes from "./Art.css";

const Art = () => {
  return (
    <div className="backGround">
      <img className="Slott" src={slott} alt="Slott"></img>
    </div>
  );
};

export default Art;

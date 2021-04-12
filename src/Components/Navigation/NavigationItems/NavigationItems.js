import React, { useState } from "react";
import classes from "./NavigationItems.css";
import { Link } from "react-router-dom";
import Paint from "../../../UI/Paint/Paint";
import Hamburger from "../../../UI/Hamburger/Hamburger";
import painty from "../../../Images/Painty.png";
import Cross from "../../../UI/Cross/Cross";
import Header from "../../Header/Header";

const NavigationItems = (props) => {
  let iconSwitch = props.updated ? <Cross /> : <Hamburger />;

  return (
    <nav className="NavItem">
      <div className="emptyBox"></div>

      <div className="HamburgerIcon" onClick={props.iconChange}>
        {iconSwitch}
      </div>

      <div className="PaintBoardIcon">
        <Paint />
      </div>
    </nav>
  );
};

export default NavigationItems;

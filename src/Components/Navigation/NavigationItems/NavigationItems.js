import React from "react";
import "./NavigationItems.css";
import Daisy from "../../../UI/Daisy/Daisy";

const NavigationItems = ({ open, iconChange }) => {
  return (
    <nav className={open ? "NavItem-open" : "NavItem"}>
      <div className="name_artist">
        <div>Hanne</div>
        <div>Edfelt</div>
      </div>

      <div
        onClick={iconChange}
        className={open ? "menu-btn open" : "menu-btn closed"}
      >
        <span className="upper_bar"></span>
        <span className="lower_bar"></span>
      </div>

      <div className="daisy_icon">
        {/* <Paint /> */}
        <Daisy daisyHeight="100px" daisyWidht="100px" />
      </div>
    </nav>
  );
};

export default NavigationItems;

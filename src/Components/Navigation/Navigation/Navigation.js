import React, { useState } from "react";
import NavigationDropdown from "../NavigationDropdown/NavigationDropdown";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Navigation.css";
//navigationbar + navigationmenu

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const body = document.querySelector("body");

  open
    ? body.classList.add("lock-screen")
    : body.classList.remove("lock-screen");

  return (
    <React.Fragment>
      <NavigationItems
        iconChange={() => setOpen(!open)}
        open={open}
        className="navbar_sticky"
      />
      <NavigationDropdown open={open} setOpen={setOpen} />
    </React.Fragment>
  );
};

export default Navigation;

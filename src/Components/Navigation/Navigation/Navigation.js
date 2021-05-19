import React, { useState } from "react";
import NavigationDropdown from "../NavigationDropdown/NavigationDropdown";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Navigation.css";
//navigationbar + navigationmenu
import Scrollbar from "smooth-scrollbar";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  open
    ? Scrollbar.destroy(document.querySelector("#my-scrollbar"))
    : Scrollbar.init(document.querySelector("#my-scrollbar"));

  const body = document.querySelector("body");

  open
    ? body.classList.add("lock-screen")
    : body.classList.remove("lock-screen");

  // open ? body.removeAttribute("my-scrollbar") : console.log("hello");

  // document.getElementById("body").setAttribute("my-scrollbar", "");

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

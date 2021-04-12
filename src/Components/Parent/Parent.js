import React, { useState } from "react";
import Intro from "../Intro/Intro";
import Header from "../Header/Header";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import "./Parent.css";

const Parent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Parent">
      <NavigationItems iconChange={() => setOpen(!open)} updated={open} />
      {open ? <Intro /> : <Header />}
    </div>
  );
};
export default Parent;

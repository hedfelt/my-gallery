import React, { useState, useEffect } from "react";
import "./Header.css";
import { motion } from "framer-motion";
import Arrow from "../../UI/Arrow/Arrow";
import watercolor from "../../Images/watercolor1.png";
import Paint from "../../UI/Paint/Paint";
import Art from "../../UI/Art/Art";

const Header = (props) => {
  // offsetY is number of pixels scrolled below the page top
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Intro">
      <Art style={{ transform: `translateY(${offsetY * -0.2}px)` }} />
      <div
        className="Header1"
        style={{ transform: `translateY(${offsetY * -0.2}px)` }}
      >
        Welcome
      </div>
    </div>
  );
};

export default Header;

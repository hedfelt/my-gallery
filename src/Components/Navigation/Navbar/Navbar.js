import React from "react";
import "./Navbar.scss";

import { motion } from "framer-motion";
import NavbarIcon from "../../../UI/NavbarIcon/NavbarIcon";

const Navbar = ({ showModal, iconChange }) => {
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 6,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -6,
    },
  };

  return (
    <motion.nav
      className={showModal ? "navbar navbar--closed" : "navbar navbar--open"}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="navbar__icon">
        <NavbarIcon />
      </motion.div>
      <motion.div className="navbar__hamburger" onClick={iconChange}>
        <motion.div
          className="navbar__upperbar"
          variants={top}
          initial={showModal ? "closed" : "open"}
          animate={showModal ? "opened" : "closed"}
        ></motion.div>
        <motion.div
          className="navbar__lowerbar"
          variants={bottom}
          initial={showModal ? "closed" : "open"}
          animate={showModal ? "opened" : "closed"}
        ></motion.div>
      </motion.div>
      <div className="navbar__name">
        Hanne
        <br />
        Edfelt
      </div>
    </motion.nav>
  );
};

export default Navbar;

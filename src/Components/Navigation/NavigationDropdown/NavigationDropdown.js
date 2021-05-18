import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationDropdown.css";
import { motion } from "framer-motion";

const NavigationDropdown = ({ open, setOpen }) => {
  return (
    <div className={open ? "navigation_overlay" : "navigation_overlay-hidden"}>
      <motion.nav
        className="linkItems"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 50 }}
      >
        <NavLink
          onClick={() => setOpen(false)}
          className="linkItem home"
          to="/"
          exact
        >
          HOME
        </NavLink>

        <NavLink
          onClick={() => setOpen(false)}
          className="linkItem about"
          to="/about"
        >
          ABOUT
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className="linkItem works"
          to="/Artworks"
        >
          ARTWORKS
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className="linkItem contact"
          to="/contact"
        >
          CONTACT
        </NavLink>
      </motion.nav>
    </div>
  );
};

export default NavigationDropdown;

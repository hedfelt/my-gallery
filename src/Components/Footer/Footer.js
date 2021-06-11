import React, { useEffect } from "react";
import "./Footer.scss";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
      });
    }
  }, [inView, animation]);
  return (
    <motion.div
      data-scroll-section
      initial={{ opacity: 0.2 }}
      animate={animation}
      transition={{ duration: 2 }}
      ref={ref}
      className="footer"
    >
      <motion.div className="footer__icons">
        <motion.div whileHover={{ scale: 1.3 }}>
          <FaFacebook className="footer__facebook" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <FaInstagram className="footer__instagram" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <FaPinterest className="footer__pinterest" />
        </motion.div>
      </motion.div>
      <div className="footer__links">
        <motion.div whileHover={{ scale: 1.3 }}>
          <NavLink className="footer__home" to="/" exact>
            HOME
          </NavLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <NavLink className="footer__about" to="/about">
            ABOUT
          </NavLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <NavLink className="footer__works" to="/Artworks">
            ARTWORKS
          </NavLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <NavLink className="footer__contact" to="/contact">
            CONTACT
          </NavLink>
        </motion.div>
      </div>
    </motion.div>
  );
};

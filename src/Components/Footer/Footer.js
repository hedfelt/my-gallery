import React, { useEffect, useState } from "react";
import "./Footer.scss";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Icons from "../../UI/Icons/Icons";

export const Footer = () => {
  const facebook =
    "M37.3333 31.625H42V37.4375H37.3333V51H32.6667V37.4375H28V31.625H32.6667V29.1934C32.6667 26.8897 33.2484 23.9796 34.4058 22.3889C35.5631 20.7944 37.0082 20 38.7396 20H42V25.8125H38.7333C37.9587 25.8125 37.3333 26.5914 37.3333 27.5543V31.625Z";
  const instagram =
    "M41.3333 23C43.4074 23 45.2346 23.6914 46.5185 25.0247C47.8025 26.3086 48.4938 28.0864 48.4938 30.1605V40.3333C48.4938 42.4568 47.8025 44.284 46.4691 45.5679C45.1852 46.8025 43.4074 47.4938 41.2839 47.4938H31.2099C29.1852 47.4938 27.4074 46.8519 26.0741 45.5679C24.6914 44.2346 24 42.4074 24 40.284V30.1605C24 25.8642 26.8642 23 31.1605 23H41.3333ZM44.8889 43.9383C45.7778 43.0988 46.321 41.8642 46.321 40.3333V30.1605C46.321 28.7284 45.8272 27.4938 44.9877 26.6049C44.0988 25.716 42.8642 25.2716 41.3827 25.2716H31.2099C29.7284 25.2716 28.4444 25.716 27.6049 26.5556C26.716 27.4444 26.2716 28.679 26.2716 30.1605V40.284C26.2716 41.8148 26.716 43.0494 27.6049 43.9383C28.4938 44.7778 29.7284 45.2222 31.2099 45.2222H41.2839C42.7654 45.2222 44 44.7778 44.8889 43.9383ZM42.8149 30.1605C43.6058 30.1605 44.247 29.5193 44.247 28.7284C44.247 27.9375 43.6058 27.2963 42.8149 27.2963C42.024 27.2963 41.3828 27.9375 41.3828 28.7284C41.3828 29.5193 42.024 30.1605 42.8149 30.1605ZM36.2468 28.8766C32.79 28.8766 29.9258 31.6914 29.9258 35.1975C29.9258 38.7037 32.7406 41.5185 36.2468 41.5185C39.7529 41.5185 42.5678 38.6543 42.5678 35.1975C42.5678 31.7408 39.7036 28.8766 36.2468 28.8766ZM36.2468 39.2469C34.0245 39.2469 32.1974 37.4198 32.1974 35.1975C32.1974 32.9753 34.0245 31.1482 36.2468 31.1482C38.469 31.1482 40.2962 32.9753 40.2962 35.1975C40.2962 37.4198 38.469 39.2469 36.2468 39.2469Z";
  const pinterest =
    "M36.6062 19C29.5555 19 26 25.0651 26 30.1239C26 33.1864 26.9663 35.9107 29.0386 36.9251C29.3785 37.0932 29.6831 36.9313 29.7817 36.4799C29.8502 36.1685 30.0127 35.3802 30.0848 35.0508C30.1839 34.6043 30.1455 34.4486 29.871 34.0582C29.2737 33.2132 28.8912 32.1185 28.8912 30.5667C28.8912 26.067 31.6972 22.0388 36.1977 22.0388C40.1829 22.0388 42.3724 24.9605 42.3724 28.8617C42.3724 33.9965 40.4787 38.3299 37.668 38.3299C36.1152 38.3299 34.9538 36.79 35.3253 34.9001C35.7711 32.644 36.6352 30.2105 36.6352 28.5809C36.6352 27.1238 35.9829 25.9082 34.6341 25.9082C33.0471 25.9082 31.772 27.8785 31.772 30.5169C31.772 32.1975 32.2453 33.3346 32.2453 33.3346C32.2453 33.3346 30.6214 41.5916 30.3365 43.0375C29.7698 45.9175 30.2514 49.447 30.2924 49.8032C30.3163 50.0149 30.5425 50.066 30.6453 49.9065C30.7911 49.6768 32.6822 46.8771 33.3242 44.0787C33.5064 43.2872 34.3678 39.1849 34.3678 39.1849C34.8837 40.3655 36.3908 41.4029 37.9934 41.4029C42.7632 41.4029 46 36.1853 46 29.2011C46.0005 23.9187 42.2723 19 36.6062 19Z";

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, delay: 0, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };
  return (
    <div className="footer">
      <motion.div className="footer__icons">
        <div className="footer__icon">
          <Icons icon={facebook} />
        </div>
        <div className="footer__icon">
          <Icons icon={instagram} />
        </div>
        <div className="footer__icon">
          <Icons icon={pinterest} />
        </div>
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
    </div>
  );
};

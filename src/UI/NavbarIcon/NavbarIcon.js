import React from "react";
import { motion } from "framer-motion";

const NavbarIcon = () => {
  const iconRotation = {
    rest: {
      rotate: -90,
      transition: {
        duration: 1.5,
        type: "spring",
      },
    },
    hover: {
      rotate: 90,
      transition: {
        duration: 1.5,
        type: "spring",
      },
    },
  };
  return (
    <motion.svg
      whileHover="hover"
      animate="rest"
      viewBox="0 0 179 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={iconRotation}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M93.0104 82.6511L98.7736 0L80.9597 0.214155L86.7772 84.5694L25.1397 26L13.962 39.8723L82.9677 89.2829L0 101.991L4.12435 119.322L83.2044 95.684L42.026 167.943L58.1721 175.472L89.6082 96.6518L121.261 174.531L137.163 166.499L95.0735 93.7518L174.394 119.902L178.573 102.584L96.6723 87.6818L166.486 40.9699L155.405 27.0206L93.0104 82.6511Z"
        fill="black"
      />
    </motion.svg>
  );
};

export default NavbarIcon;

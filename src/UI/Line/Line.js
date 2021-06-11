import React from "react";
import { motion } from "framer-motion";

// BLUE

const Line = () => {
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      //   fill: "rgba(0,0,0,1)",

      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <svg
      width="20vw"
      viewBox="0 0 313 565"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        d="M307.17 559.702C286.853 517.007 246.823 486.42 212.119 455.744C195.144 440.74 178.164 427.142 158.482 415.825C142.197 406.461 124.283 399.427 106.666 393.005C84.5291 384.936 61.664 379.68 43.082 364.399C-2.9234 326.566 -2.90944 255.921 20.1969 205.244C43.8213 153.431 90.2 115.945 135.922 84.4475C174.539 57.8445 213.929 33.9135 250.998 5"
        stroke="#97B9B9"
        strokeWidth="9"
        // stroke-linecap="round"
        // stroke-linejoin="round"
      />
    </svg>
  );
};

export default Line;

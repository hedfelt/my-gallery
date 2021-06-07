import React from "react";
import { motion } from "framer-motion";

export const OrangeLine = () => {
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
      className="string"
      width="314"
      height="566"
      viewBox="0 0 314 566"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        d="M6 6C26.3166 48.6946 66.3472 79.2822 101.051 109.958C118.026 124.962 135.006 138.56 154.688 149.877C170.973 159.241 188.886 166.274 206.504 172.697C228.641 180.766 251.506 186.022 270.088 201.303C316.093 239.136 316.079 309.781 292.973 360.458C269.349 412.271 222.97 449.757 177.248 481.254C138.63 507.857 99.2408 531.788 62.1723 560.702"
        stroke="#FBA629"
        strokeWidth="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

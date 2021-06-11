import React from "react";
import { motion } from "framer-motion";

const Peek = () => {
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,

      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <svg
      width="405"
      height="325"
      viewBox="0 0 405 325"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M313.457 37.3469C296.053 35.4925 279.045 33.9052 261.613 36.249C245.464 38.4203 229.239 41.8157 213.784 47.0226C181.792 57.8007 149.964 77.423 127.217 102.469C104.64 127.328 87.8213 158.01 87.348 192.295C86.8417 228.962 111.554 258.727 144.098 272.72C177.359 287.021 215.361 288.554 250.05 278.896C279.068 270.816 308.845 257.423 329.514 234.669C336.376 227.115 342.239 217.381 343.719 207.117C346.066 190.84 337.15 174.264 324.162 164.846C303.354 149.758 277.744 147.739 252.932 147.279"
          stroke="#97B8F8"
          strokeWidth="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="-4"
          y="0"
          width="413"
          height="333"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />

          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Peek;

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./CircleLine.scss";

import useElementOnScreen from "../../hooks/useElementOnScreen";

const CircleLine = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  const circleLine = document.querySelector("notVisible");

  const [visible, setVisible] = useState(false);

  const [isActive, setActive] = useState(false);

  //   const handleToggle = () => {
  //     setActive(!isActive);

  useEffect(() => {
    if (isVisible) setActive(true);
  }, [isVisible]);

  return (
    <div ref={containerRef}>
      {/* <div> {isVisible ? "in view" : "not"}</div> */}
      <svg
        width="638"
        height="265"
        viewBox="0 0 638 265"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={isActive ? "visible" : null}
          //   className={isVisible ? "visible" : "notVisible"}
          d="M4 4C53.7584 5.90558 100.554 10.4332 149.055 17.8226C204.636 26.2908 260.136 34.8213 315.547 43.7718C375.239 53.4139 433.926 65.3017 491.153 80.1515C532.929 90.992 576.989 103.407 607.71 125.859C628.902 141.347 642.234 164.629 628.249 184.966C609.335 212.47 569.989 229.222 529.15 240.087C504.996 246.512 479.305 249.587 453.798 252.637C427.394 255.795 400.883 258.542 374.082 259.676C318.409 262.031 262.932 261.494 207.719 256.029C142.454 249.57 47.7596 229.367 36.4768 178.351C31.3239 155.052 55.9367 134.573 79.4798 119.584C116.075 96.2857 160.666 80.1368 206.563 66.2441C261.829 49.5156 317.712 32.378 376.778 22.3171C415.107 15.7883 467.466 11.0062 504.246 23.5891C569.166 45.7982 566.633 95.0541 566.633 136.799"
          stroke="#FBA629"
          strokeWidth="0"
          // stroke-linecap="round"
          // stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default CircleLine;

import React, { useState, useEffect } from "react";
import "./Home.scss";

import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
  useSpring,
  useElementScroll,
} from "framer-motion";
import Arttext from "../../Images/Arttext.png";
import Arrow from "../../UI/Arrow/Arrow";
import { useInView } from "react-intersection-observer";
import FrontArt from "../FrontArt/FrontArt";
import PinkLine from "../../UI/PinkLine/PinkLine";
import Line from "../../UI/Line/Line";
import Art from "../../UI/Art/Art";
import CircleLine from "../../UI/CircleLine/CircleLine";

const Home = () => {
  // parallex scrolling

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 1400], [0, 500]);

  const y7 = useTransform(scrollY, [1000, 2000], [0, 400]);

  // parallex scrolling stop

  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 1] };

  const ArtAnimation = {
    hidden: {
      y: "0rem",
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: ["0rem", "10rem", "0rem"],
      scale: [0.7, 0.4, 1],
      transition: { duration: 1.5, ...transition },
    },
  };

  const hanneVariants = {
    hidden: { opacity: 0, y: "10vh" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: "10vh", transition: { duration: 0.8, delay: 0.4 } },
    hover: {
      scale: 1.1,
    },
  };

  // const edfeltVariants = {
  //   hidden: { opacity: 0, y: "3rem" },
  //   visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } },
  //   exit: { opacity: 0, y: "15vh", transition: { duration: 0.7, delay: 0.3 } },
  //   hover: {
  //     scale: 1.1,
  //   },
  // };

  // inview

  const controls = useAnimation();
  const [ref, inView] = useInView({
    root: null, // default, use viewport
    rootMargin: "-50% 0px 0% 0px",
    threshold: 0.1, // half of item height
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="Home">
      <div className="home__pink">
        <PinkLine />
      </div>
      <div className="home__orange">
        <Line />
      </div>
      <motion.div
        className="home__textgroup"
        // animate={{ opacity: 1, y: 0 }}
        // initial={{ opacity: 0, y: 10 }}
        // transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="home__hanne"
          initial={{ y: "15rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          HANNE
        </motion.div>
        <motion.div
          className="home__edfelt"
          initial={{ y: "15rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          EDFELT
        </motion.div>
        <motion.div
          className="home__portfolio"
          initial={{ y: "15rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          PORTFOLIO
        </motion.div>
        {/* Art */}
        <motion.div
          className="home__art"
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          style={{ y: y1 }}
        >
          <Art />
        </motion.div>

        {/* WATERCOLOR */}
        <motion.div className="home__watercolors">
          01 <br></br>WATERCOLORS
        </motion.div>
        <motion.div className="home__circle">
          <CircleLine />
        </motion.div>
      </motion.div>

      {/* PAINTINGS */}

      <FrontArt className="home__frontart" style={{ y: y7 }} />
    </div>
  );
};

export default Home;

import React, { useEffect, useRef } from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import FrontArt from "../FrontArt/FrontArt";
import PinkLine from "../../UI/PinkLine/PinkLine";
import Line from "../../UI/Line/Line";
import Art from "../../UI/Art/Art";
import CircleLine from "../../UI/CircleLine/CircleLine";
import paintStrokes from "./fargeklatt2.png";

const Home = () => {
  return (
    <div className="home">
      <img className="home__image" src={paintStrokes} />
      <div className="home__pink">
        <PinkLine />
      </div>
      <div className="home__orange">
        <Line />
      </div>
      <motion.div className="home__textgroup">
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
        <div className="home__art">
          <Art style={{ height: "100rem" }} />
        </div>

        <motion.div className="home__watercolors">
          01 <br></br>WATERCOLORS
        </motion.div>
        <motion.div className="home__circle">
          <CircleLine />
        </motion.div>
      </motion.div>

      <div>
        <FrontArt className="home__frontart" />
      </div>
    </div>
  );
};

export default Home;

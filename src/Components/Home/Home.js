import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import FrontArt from "../FrontArt/FrontArt";
import useElementOnScreen from "../../hooks/useElementOnScreen";

import Art from "../../UI/Art/Art";

import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";

import CurvedText from "../../UI/CurvedText/CurvedText";

const Home = () => {
  const [loremRef, loremIsVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  const loremVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
    hidden: { opacity: 0, y: 40 },
  };

  // const [isActive, setActive] = useState(false);

  // useEffect(() => {
  //   if (isVisible) setActive(true);
  // }, [isVisible]);
  const [postData, setPost] = useState(null);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="home">
      <div className="home__textgroup">
        <div className="home__hanne">HANNE</div>
        <div className="home__edfelt">
          {/* EDFELT */}
          <CurvedText />
        </div>
        <motion.div
          className="home__portfolio"
          initial={{ y: "15rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          PORTFOLIO
        </motion.div>
        <div className="home__art">
          <Art />
        </div>
        <div className="home__watercolors">Watercolors</div>
      </div>

      <div className="home__duo">
        <div className="frontart__wrapper">
          <FrontArt postData={postData[3]} />
        </div>
      </div>

      <motion.div
        className="home__lorem"
        ref={loremRef}
        variants={loremVariants}
        animate={loremIsVisible ? "visible" : "hidden"}
      >
        Lorem ipsum <br /> sit amet consectetur adipisicing elit.
        <br />
        Rerum, libero!
      </motion.div>

      <div className="home__grid">
        <div className="home__wrapperFour">
          <FrontArt postData={postData[0]} />
        </div>

        <div className="home__wrapperFive">
          <FrontArt postData={postData[5]} scroll={-200} />
        </div>
        <div className="home__wrapperSix">
          <FrontArt postData={postData[2]} />
        </div>
      </div>
    </div>
  );
};

export default Home;

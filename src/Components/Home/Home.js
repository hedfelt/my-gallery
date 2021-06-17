import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import FrontArt from "../FrontArt/FrontArt";
import PinkLine from "../../UI/PinkLine/PinkLine";
import Line from "../../UI/Line/Line";
import Art from "../../UI/Art/Art";
import CircleLine from "../../UI/CircleLine/CircleLine";
import paintStrokes from "./fargeklatt2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import castle from "./slottnytt.png";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import Images from "../../Images/Images/Images";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import CurvedText from "../../UI/CurvedText/CurvedText";

const Home = () => {
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
        {/* <div className="home__wrapper">
          <div className="home__container">
            <img
              ref={ref}
              src={urlFor(postData[1].mainImage).width(1000).height(1200)}
              alt={postData[1].mainImage.alt}
              className="home__duoLeft"
            />
          {postData[1].title} <br /> Watercolor and pen on paper
        </div> */}
        <div className="frontart__wrapper">
          <FrontArt postData={postData[1]} />
        </div>

        <div className="frontart__wrapper">
          <FrontArt postData={postData[3]} />
        </div>
      </div>

      <div className="home__lorem">
        Lorem ipsum <br /> sit amet consectetur adipisicing elit.
        <br />
        Rerum, libero!
      </div>

      {/* //grid */}
      <div className="home__grid">
        {/* <div className="home__wrapperFour">
          <div className="home__containerFour">
            <img
              src={urlFor(postData[0].mainImage).width(1400).height(1600)}
              alt={postData[0].mainImage.alt}
              className="home__imageFour"
            />
          </div>
          <div className="home__titleFour">
            {postData[0].title} <br /> Watercolor on paper
          </div>
        </div> */}

        <div className="home__wrapperFour">
          <FrontArt postData={postData[0]} />
        </div>
        {/* <div className="home__wrapperFive">
          <div className="home__containerFive">
            <img
              src={urlFor(postData[5].mainImage).width(1000).height(1200)}
              alt={postData[5].mainImage.alt}
              className="home__imageFive"
            />
          </div>
          <div className="home__title">
            {postData[5].title} <br /> Watercolor on paper
          </div>
        </div> */}

        <div className="home__wrapperFive">
          <FrontArt postData={postData[5]} scroll={-200} />
        </div>
        <div className="home__wrapperSix">
          <FrontArt postData={postData[2]} />
        </div>

        {/* <div className="home__wrapperSix">
          <div className="home__containerSix">
            <img
              src={urlFor(postData[2].mainImage).width(1200).height(1400)}
              alt={postData[2].mainImage.alt}
              className="home__imageSix"
            />
          </div>
          <div className="home__title">
            {postData[2].title} <br /> Watercolor on paper
          </div>
        </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;

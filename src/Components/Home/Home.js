import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import { motion, useViewportScroll, useTransform } from "framer-motion";
// import FrontArt from "../FrontArt/FrontArt";
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

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const refSix = useRef(null);
  const refSixImage = useRef(null);

  useEffect(() => {
    // gsap.from(".home__duoLeft", {
    //   scrollTrigger: {
    //     trigger: ref.current,
    //     scrub: true,
    //     start: "top bottom",
    //     end: "top top",
    //   },
    //   scale: 1.5,
    //   ease: "power1",
    // });
    // gsap.from(".home__duoRight", {
    //   scrollTrigger: {
    //     trigger: ".home__duoRight",
    //     scrub: true,
    //     start: "top bottom",
    //     end: "top top",
    //   },
    //   scale: 1.5,
    //   ease: "power1",
    // });
    // gsap.from(".home__lorem", {
    //   scrollTrigger: {
    //     trigger: ".home__lorem",
    //     scrub: true,
    //     start: "top bottom",
    //     end: "top top",
    //   },
    //   scale: 1.5,
    //   ease: "power1",
    // });
    // gsap.from(".home__wrapperFive", {
    //   scrollTrigger: {
    //     trigger: ".home__wrapperFive",
    //     scrub: true,
    //     start: "top bottom",
    //     end: "top top",
    //   },
    //   y: 200,
    //   ease: "power1",
    // });

    // gsap.from(".home__imageFive", {
    //   scrollTrigger: {
    //     trigger: ".home__imageFive",
    //     scrub: true,
    //     start: "top bottom",
    //     end: "top top",
    //   },
    //   scale: 1.2,
    //   ease: "power1",
    // });
    gsap.to(refSixImage.current, {
      scrollTrigger: {
        trigger: refSix.current,
        scrub: true,
        start: "top bottom",
        end: "top top",
      },
      scale: 1.2,
      ease: "power1",
    });
  }, [postData]);

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
      {/* <img className="home__image" /> */}
      <div className="home__vertical">
        <div className="home__behold">Behold</div>
        <div className="home__see">& See</div>
      </div>

      <div className="home__textgroup">
        <div
          className="home__hanne"
          // initial={{ y: "15rem", opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.8 }}
        >
          HANNE
        </div>
        <div className="home__verticalTwo">
          <div className="home__beholdTwo">Behold</div>
          <div className="home__seeTwo">& See</div>
        </div>
        <div
          className="home__edfelt"
          // initial={{ y: "15rem", opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // transition={{ duration: 1 }}
        >
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
        <div className="home__wrapper">
          <div className="home__container">
            <img
              ref={ref}
              src={urlFor(postData[1].mainImage).width(1000).height(1200)}
              alt={postData[1].mainImage.alt}
              className="home__duoLeft"
            />
          </div>
          {postData[1].title} <br /> Watercolor and pen on paper
        </div>
        <div className="home__wrapper">
          <div className="home__container">
            <img
              src={urlFor(postData[3].mainImage).width(1000).height(1200)}
              alt={postData[3].mainImage.alt}
              className="home__duoRight"
            />
          </div>
          {postData[3].title} <br /> Watercolor and pen on paper
        </div>
      </div>

      <div className="home__lorem">
        Lorem ipsum <br /> sit amet consectetur adipisicing elit.
        <br />
        Rerum, libero!
      </div>

      {/* //grid */}
      <div className="home__grid">
        <div className="home__wrapperFour">
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
        </div>
        <div className="home__wrapperFive">
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
        </div>

        <div className="home__wrapperSix" ref={refSix}>
          <div className="home__containerSix">
            <img
              ref={refSixImage}
              src={urlFor(postData[2].mainImage).width(1200).height(1400)}
              alt={postData[2].mainImage.alt}
              className="home__imageSix"
            />
          </div>
          <div className="home__title">
            {postData[2].title} <br /> Watercolor on paper
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./FrontArt.scss";
import castle from "../../Images/slottnytt.png";
import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
  useSpring,
  useElementScroll,
} from "framer-motion";

import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import { useInView } from "react-intersection-observer";
import imageUrlBuilder from "@sanity/image-url";

const FrontArt = () => {
  const [postData, setPost] = useState(null);

  //scrolling

  // large

  // const animationlarge = useAnimation();

  // const [contentReflarge, inViewlarge] = useInView({
  //   triggerOnce: true,
  //   rootMargin: "-300px",
  // });

  // useEffect(() => {
  //   if (inViewlarge) {
  //     animationlarge.start("visible");
  //   }
  // }, [animationlarge, inViewlarge]);

  // one

  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  // two

  const animationtwo = useAnimation();

  const [contentReftwo, inViewtwo] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inViewtwo) {
      animationtwo.start("visible");
    }
  }, [animationtwo, inViewtwo]);
  // three

  const animationthree = useAnimation();

  const [contentRefthree, inViewthree] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inViewthree) {
      animationthree.start("visible");
    }
  }, [animationthree, inViewthree]);

  // sanity

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  const slug = "girl-in-sun";

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="images">
      {/* <h2 className="images__title">
        <motion.div
          ref={contentRef}
          animate={animation}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              transition: { duration: 0.5 },
            },
            hidden: {
              opacity: 0,
              transition: { duration: 0.5 },
            },
          }}
          className="images__number"
        >
          01
        </motion.div>
        <motion.div
          ref={contentRef}
          animate={animation}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              transition: { duration: 0.5, delay: 0.2 },
            },
            hidden: {
              opacity: 0,
              transition: { duration: 0.5 },
            },
          }}
          className="images__watercolors"
        >
          Watercolors
        </motion.div>
      </h2> */}

      {/* large image */}

      <motion.img
        className="images__large"
        src={urlFor(postData.mainImage).width(1000).height(1200)}
        alt={postData.mainImage.alt}
      />

      {/* images */}

      <div className="images__container">
        <motion.div
          className="images__containerone"
          ref={contentRef}
          animate={animation}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
            },
            hidden: { opacity: 0, y: 72 },
          }}
        >
          <img
            src={urlFor(postData.mainImage).width(600).height(700)}
            alt={postData.mainImage.alt}
            className="images__one"
          />
        </motion.div>
        <motion.div
          className="images__containertwo"
          ref={contentReftwo}
          animate={animationtwo}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
            },
            hidden: { opacity: 0, y: 72 },
          }}
        >
          <img
            src={urlFor(postData.mainImage).width(600).height(700)}
            alt={postData.mainImage.alt}
            className="images__two"
          />
        </motion.div>
        <motion.div
          className="images__containerthree"
          ref={contentRefthree}
          animate={animationthree}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
            },
            hidden: { opacity: 0, y: 72 },
          }}
        >
          <img
            src={urlFor(postData.mainImage).width(600).height(700)}
            alt={postData.mainImage.alt}
            className="images__three"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FrontArt;

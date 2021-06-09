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

  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    rootMargin: "-500px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  // two

  const animationtwo = useAnimation();

  const [contentReftwo, inViewtwo] = useInView({
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
    rootMargin: "-100px",
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
    <div className="fronart">
      <div className="frontart__containerOne">
        <motion.img
          className="frontart__imageOne"
          src={urlFor(postData.mainImage).width(1000).height(1200)}
          alt={postData.mainImage.alt}
        />
        {postData.title} <br /> Watercolor on paper
      </div>

      {/* DUO */}

      <div className="frontart__duo">
        <div className="frontart__container">
          <motion.div className="frontart__duoContainerOne">
            <motion.img
              src={urlFor(postData.mainImage).width(600).height(700)}
              alt={postData.mainImage.alt}
              className="frontart__duoImageOne"
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={{
                visible: {
                  scale: 1,
                  transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
                },
                hidden: { scale: 1.2 },
              }}
            />{" "}
          </motion.div>
          {postData.title} <br /> Watercolor on paper
        </div>
        <div className="frontart__container">
          <motion.div className="frontart__duoContainerTwo">
            <motion.img
              src={urlFor(postData.mainImage).width(600).height(700)}
              alt={postData.mainImage.alt}
              className="frontart__duoImageTwo"
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={{
                visible: {
                  scale: 1,
                  transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
                },
                hidden: { scale: 1.2 },
              }}
            />
          </motion.div>
          {postData.title} <br /> Watercolor on paper
        </div>
      </div>

      {/* //row 3 */}

      <div className="frontart__container">
        <div className="frontart__titleFour">
          {postData.title} <br /> Watercolor on paper
        </div>
        <motion.div
          className="frontart__containerFour"
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
            className="frontart__imageFour"
          />
        </motion.div>
      </div>

      {/* //duo 2 */}

      <div className="frontart__duoTwo">
        <div className="frontart__containerFive">
          <motion.div className="frontart__duoContainerFive">
            <motion.img
              src={urlFor(postData.mainImage).width(600).height(700)}
              alt={postData.mainImage.alt}
              className="frontart__imageFive"
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={{
                visible: {
                  scale: 1,
                  transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
                },
                hidden: { scale: 1.2 },
              }}
            />{" "}
          </motion.div>
          {postData.title} <br /> Watercolor on paper
        </div>

        <div className="frontart__containerSix">
          <motion.div className="frontart__duoContainerSix">
            <motion.img
              src={urlFor(postData.mainImage).width(600).height(700)}
              alt={postData.mainImage.alt}
              className="frontart__imageSix"
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={{
                visible: {
                  scale: 1,
                  transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
                },
                hidden: { scale: 1.2 },
              }}
            />
          </motion.div>
          {postData.title} <br /> Watercolor on paper
        </div>
      </div>
      <div className="frontart__colorblock">
        <div className="frontart__colorblockOne"></div>
        <div className="frontart__colorblockTwo"></div>
      </div>
    </div>
  );
};

export default FrontArt;

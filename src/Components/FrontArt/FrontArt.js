import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./FrontArt.scss";

import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const FrontArt = ({ postData, scroll }) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(
    () => {
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
        scale: 0.9,
        y: scroll,
        ease: "power1",
      });
    },

    [postData],
    ref
  );

  let scrollRef = 0;

  useEffect(() => {
    window.addEventListener(
      "scroll",
      function () {
        // increase value up to 10, then refresh AOS
        scrollRef <= 1000 ? scrollRef++ : ScrollTrigger.refresh();
      },

      { once: true }
    );
  }, []);

  return (
    <div ref={ref} className="frontart">
      <div className="frontart__container">
        <img
          src={urlFor(postData.mainImage).width(1000).height(1200)}
          alt={postData.mainImage.alt}
          className="frontart__image"
        />
      </div>
      {postData.title} <br /> Watercolor and pen on paper
    </div>
  );
};

export default FrontArt;

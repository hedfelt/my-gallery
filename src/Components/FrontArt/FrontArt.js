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
          end: "bottom top",
        },
        scale: 1,
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
    <div className="frontart">
      <div className="frontart__container">
        <img
          src={urlFor(postData.mainImage).width(1200).height(1400)}
          alt={postData.mainImage.alt}
          className="frontart__image"
          ref={ref}
        />
      </div>
      .<div className="frontart__title">{postData.title}</div>
      <div className="frontart__mediums">Watercolor and pen on paper</div>
    </div>
  );
};

export default FrontArt;

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./FrontArt.scss";
import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
  useSpring,
  useElementScroll,
} from "framer-motion";

import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// const FrontArt = () => {
//   gsap.registerPlugin(ScrollTrigger);
//   gsap.registerPlugin(ScrollTrigger);

//   const scaleRef = useRef();
//   const scaleRefTwo = useRef();

//   useEffect(() => {
//     gsap.from(".frontart__duoImageOne", {
//       scrollTrigger: {
//         trigger: scaleRef.current,
//         scrub: 0.5,
//         start: "bottom bottom",
//         end: "top top",
//       },
//       scale: 2,
//       transformOrigin: "center",
//       ease: "none",
//     });
//   }, []);

//   useEffect(() => {
//     gsap.from(".frontart__duoImageTwo", {
//       scrollTrigger: {
//         trigger: ".frontart__duoImageTwo",
//         scrub: 0.5,
//         start: "bottom bottom",
//         end: "top top",
//       },
//       scale: 2,
//       transformOrigin: "center",
//       ease: "none",
//     });
//   }, []);

//   const animation = useAnimation();
//   const [contentRef, inView] = useInView({
//     rootMargin: "-500px",
//   });

//   useEffect(() => {
//     if (inView) {
//       animation.start("visible");
//     } else {
//       animation.start("hidden");
//     }
//   }, [animation, inView]);

//   const animationtwo = useAnimation();

//   const [contentReftwo, inViewtwo] = useInView({
//     rootMargin: "-300px",
//   });

//   useEffect(() => {
//     if (inViewtwo) {
//       animationtwo.start("visible");
//     }
//   }, [animationtwo, inViewtwo]);

//   const animationthree = useAnimation();

//   const [contentRefthree, inViewthree] = useInView({
//     rootMargin: "-100px",
//   });

//   useEffect(() => {
//     if (inViewthree) {
//       animationthree.start("visible");
//     }
//   }, [animationthree, inViewthree]);

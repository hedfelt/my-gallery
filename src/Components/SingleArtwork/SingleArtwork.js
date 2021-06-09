import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import "./SingleArtwork.scss";
import { motion, AnimatePresence } from "framer-motion";
import slott from "../../Images/slottnytt.png";
import { Link } from "react-router-dom";

export default function SingleArtwork() {
  const [singleArt, setSingleArt] = useState(null);
  const { slug } = useParams();

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current=="${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body
    }`
      )
      .then((data) => setSingleArt(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleArt) return <div></div>;

  const imagetransition = {
    duration: 1,
    delay: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const imageVariants = {
    exit: { y: "50%", opacity: 0 },
    enter: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.5, delay: 0, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  const backVariants = {
    exit: { x: -100, opacity: 0, imagetransition },
    enter: { x: 0, opacity: 1, transition: { delay: 0, ...imagetransition } },
  };

  return (
    <div className="artwork" key="hello">
      {/* back link */}
      <motion.div
        variants={backVariants}
        animate="enter"
        exit="exit"
        initial="exit"
        transition="transition"
      >
        <Link to="/Artworks" className="artwork__back">
          ← Back
        </Link>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        transition="transition"
        variants={imageVariants}
        className="containertest"
      >
        <motion.img
          className="artwork__img"
          src={urlFor(singleArt.mainImage).width(600).height(800)}
          alt={singleArt.mainImage.alt}
        />
      </motion.div>

      {/* INFORMATION */}

      <motion.div
        className="artwork__information"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0, duration: 0.5 }}
      >
        <h1 className="artwork__title">Title: {singleArt.title}</h1>
        <h2>Mediums: watercolor, ink, acrylic</h2>
      </motion.div>
    </div>
  );
}

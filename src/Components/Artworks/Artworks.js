import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import "./Artworks.scss";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";
import useElementOnScreen from "../../hooks/useElementOnScreen";

export default function Works() {
  const [postData, setPost] = useState(null);

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

  const testvariants = {
    enter: (index) => ({
      scale: 1,
      transition: {
        delay: 0,
        duration: 1,
      },
    }),
    initial: { scale: 0 },
    exit: (index) => ({
      scale: 0,
      transition: {
        delay: 0,
        duration: 1,
      },
    }),
  };

  return (
    <motion.div className="flex_grid" data-scroll-section>
      {postData &&
        postData.map((post, index) => (
          <motion.div
            variants={testvariants}
            initial="initial"
            animate="enter"
            exit="exit"
            custom={index}
          >
            <SingleArtworks post={post} index={index} id={index} key={index} />
          </motion.div>
        ))}
    </motion.div>
  );
}

const SingleArtworks = ({ post, index }) => {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (isVisible) setActive(true);
  }, [isVisible]);

  return (
    <motion.div className="imageBox">
      <Link
        ref={containerRef}
        to={"/post/" + post.slug.current}
        key={post.slug.current}
      >
        <motion.img
          src={urlFor(post.mainImage).width(400).height(500)}
          alt={post.mainImage.alt}
          className={
            isActive
              ? "imageBox__image imageBox__image--visible"
              : "imageBox__image imageBox__image--notvisible"
          }
          whileTap={{ scale: 1.2 }}
        />
      </Link>
    </motion.div>
  );
};

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import "./Artworks.css";
import imageUrlBuilder from "@sanity/image-url";
import { motion, useAnimation } from "framer-motion";

export default function Works() {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

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

  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 0,
      x: 100,
      transition: { delay: i * 0.3 },
    }));
  }, []);

  return (
    <div className="flex_grid">
      {postData &&
        postData.map((post, index) => (
          // <div className="innerwrapper">
          //   <Link to={"/post/" + post.slug.current} key={post.slug.current}>
          <motion.div
            custom={0 + index}
            animate={controls}
            // animate={{ y: 100 + index * 100 }}
            // initial="hidden"
            // animate="visible"
            // variants={variants}
            // transition={{ duration: 2 }}
            className="art-image"
          >
            <img
              // src={post.mainImage.asset.url}
              src={urlFor(post.mainImage).width(400).height(500)}
              alt={post.mainImage.alt}
              className="image-size"
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
            />
          </motion.div>
          //   <div className="art_title">{post.title}</div>
          // </Link>
          // </div>
        ))}
    </div>
  );
}

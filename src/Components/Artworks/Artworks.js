import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import "./Artworks.css";
import imageUrlBuilder from "@sanity/image-url";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

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

  const layoutVariance = {
    init: { opacity: 0.5 },
    animated: { opacity: 1 },
    exit: { scale: 1.5, transition: { duration: 1 } },
  };

  return (
    <div className="flex_grid">
      {postData &&
        postData.map((post, index) => (
          <Link to={"/post/" + post.slug.current} key={post.slug.current}>
            <motion.img
              src={urlFor(post.mainImage).width(400).height(500)}
              alt={post.mainImage.alt}
              className="image-size"
            />
          </Link>
        ))}
    </div>
  );
}

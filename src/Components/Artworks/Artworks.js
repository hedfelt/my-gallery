import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import "./Artworks.css";
import imageUrlBuilder from "@sanity/image-url";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  //animasjon

  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
      });
    }
    console.log("use effect hook, inView =", inView);
  }, [inView]);

  return (
    <div className="flex_grid">
      {postData &&
        postData.map((post, index) => (
          // <div className="innerwrapper">
          //   <Link to={"/post/" + post.slug.current} key={post.slug.current}>

          <motion.div
            initial={{ opacity: 0.2 }}
            animate={animation}
            ref={ref}
            // transition={{ duration: index * 0.5, delay: 0.5 * index }}
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

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import "./SingleArtwork.scss";
import { motion, AnimatePresence } from "framer-motion";
import slott from "../../Images/slottnytt.png";

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

  if (!singleArt) return <div>Loading...</div>;

  return (
    <div className="artwork">
      <img
        // layoutId={slug}
        className="artwork__img"
        // src={post.mainImage.asset.url}
        src={urlFor(singleArt.mainImage).width(600).height(800)}
        alt={singleArt.mainImage.alt}
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.9 }}
      />

      {/* <div className="artwork__information">
        <h1 className="artwork__title">Title: {singleArt.title}</h1>
        <h2>Date: xx.xx.xxxx</h2>
        <h2>Mediums: watercolor, ink, acrylic</h2>
      </div> */}
      <motion.img src={slott} layoutId="hello" className="placeholder" />
    </div>
  );
}

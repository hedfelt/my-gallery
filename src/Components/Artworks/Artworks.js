import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import "./Artworks.css";
import imageUrlBuilder from "@sanity/image-url";

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

  return (
    <div className="flex_grid">
      {postData &&
        postData.map((post, index) => (
          // <div className="innerwrapper">
          //   <Link to={"/post/" + post.slug.current} key={post.slug.current}>
          <div className="art-image">
            <img
              // src={post.mainImage.asset.url}
              src={urlFor(post.mainImage).width(400).height(500)}
              alt={post.mainImage.alt}
              className="image-size"
            />
          </div>
          //   <div className="art_title">{post.title}</div>
          // </Link>
          // </div>
        ))}
    </div>
  );
}

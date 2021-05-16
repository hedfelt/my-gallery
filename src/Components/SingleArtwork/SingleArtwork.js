import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
// import imageUrlBuilder from "@sanity/image-url";
import "./SingleArtwork.css";

// const builer = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

export default function SingleArtwork() {
  const [singleArt, setSingleArt] = useState(null);
  const { slug } = useParams();

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
    <div className="SinglePageArtwork">
      <div>
        <img src={singleArt.mainImage.asset.url} className="singleArt" />
      </div>
      <div>
        ><h1>Title: {singleArt.title}</h1>
        <h2>Date: xx.xx.xxxx</h2>
        <h2>Mediums: watercolor, ink, acrylic</h2>
      </div>
    </div>
  );
}

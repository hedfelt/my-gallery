import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";

const Images = () => {
  const [postData, setPost] = useState(null);
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

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

  if (!postData) return <div>Loading...</div>;

  return (
    <div>
      <img
        className="frontart__imageOne"
        src={urlFor(postData[1].mainImage).width(400).height(500)}
        alt={postData[1].mainImage.alt}
      />
    </div>
  );
};

export default Images;

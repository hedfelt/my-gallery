import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";

import imageUrlBuilder from "@sanity/image-url";
import "./Blogpost.scss";

const Blogpost = () => {
  const [postBlogPost, setPostBlogPost] = useState(null);

  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blogPost"]{
      title,
    body,
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
      .then((data) => setPostBlogPost(data))
      .catch(console.error);
  }, []);

  return (
    <div className="blogposts" data-scroll-section>
      {postBlogPost &&
        postBlogPost.map((post, index) => (
          <div key={post.slug.current}>
            <div className="blogposts__title">{post.title}</div>
            <div className="blogposts__blockcontent"></div>
            <img
              src={urlFor(post.mainImage).width(400).height(500)}
              alt={post.mainImage.alt}
              className="blogposts__img"
            />
            <BlockContent
              blocks={post.body}
              projectId="b22iau7s"
              dataset="production"
            />
          </div>
        ))}
    </div>
  );
};

export default Blogpost;

import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Art from "../../UI/Art/Art";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import CurvedText from "../../UI/CurvedText/CurvedText";

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const { scrollY } = useViewportScroll();

  // const initial = useTransform(scrollYProgress, (x) => -x + 1);

  const hanne = useTransform(scrollY, (x) => x * -0.5);
  const edfelt = useTransform(scrollY, (x) => x * -0.4);
  const portfolio = useTransform(scrollY, (x) => x * -0.3);
  const parallex = useTransform(scrollY, (x) => x * 0);

  const watercolor = useTransform(scrollY, (x) => x * -0.3);

  const parallexFour = useTransform(scrollY, (x) => x * -0.3);

  const parallexFourRegular = useTransform(scrollY, (x) => x * -0.1);

  // const initial = scrollYProgress + 1;

  const [scaleRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  // const initial = useTransform(scrollY, (x) => (isVisible ? x / -2100 + 2 : x));
  const initial = useTransform(scrollY, (x) => {
    console.log(x);
    return x / 1000;
  });

  const [refFour, isVisibleFour] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

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
    <div className="home">
      {/* <img className="home__image" /> */}
      <div className="home__vertical">
        <div className="home__behold">Behold</div>
        <div className="home__see">& See</div>
      </div>

      <motion.div className="home__textgroup">
        <motion.div
          style={{ y: hanne }}
          className="home__hanne"
          initial={{ y: "15rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          HANNE
        </motion.div>
        <div className="home__verticalTwo">
          <div className="home__beholdTwo">Behold</div>
          <div className="home__seeTwo">& See</div>
        </div>
        <motion.div
          style={{ y: edfelt }}
          className="home__edfelt"
          initial={{ y: "15rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* EDFELT */}
          <CurvedText />
        </motion.div>

        <motion.div
          style={{ y: portfolio }}
          className="home__portfolio"
          initial={{ y: "15rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          PORTFOLIO
        </motion.div>
        <motion.div className="home__art">
          <Art />
        </motion.div>
        <motion.div style={{ y: watercolor }} className="home__watercolors">
          Watercolors
        </motion.div>
      </motion.div>

      <div className="frontart">
        <div className="home__duo" ref={scaleRef}>
          <div className="home__wrapper">
            <div className="home__container">
              <motion.img
                style={{ scale: initial }}
                src={urlFor(postData[1].mainImage).width(1000).height(1200)}
                alt={postData[1].mainImage.alt}
                className="home__duoLeft"
              />
            </div>
            {postData[1].title} <br /> Watercolor and pen on paper
          </div>
          <div className="home__wrapper">
            <div className="home__container">
              <motion.img
                style={{ scale: initial }}
                src={urlFor(postData[3].mainImage).width(1000).height(1200)}
                alt={postData[3].mainImage.alt}
                className="home__duoRight"
              />
            </div>
            {postData[3].title} <br /> Watercolor and pen on paper
          </div>
        </div>
      </div>
      <motion.div className="home__wrapperFour">
        <div className="home__empty"></div>
        <div className="home__containerFour">
          <motion.img
            src={urlFor(postData[0].mainImage).width(1400).height(1600)}
            alt={postData[0].mainImage.alt}
            className="home__imageFour"
          />
        </div>
        <div className="home__titleFour">
          {postData[0].title} <br /> Watercolor on paper
        </div>
      </motion.div>
      <motion.div className="home__wrapperFive">
        <div className="home__containerFive">
          <motion.img
            src={urlFor(postData[5].mainImage).width(1000).height(1200)}
            alt={postData[5].mainImage.alt}
            className="home__imageFive"
          />
        </div>
        <div className="home__title">
          {postData[5].title} <br /> Watercolor on paper
        </div>
      </motion.div>

      <div className="home__outerwrapperLeft">
        <motion.div className="home__wrapperSix">
          <div className="home__containerSix">
            <motion.img
              src={urlFor(postData[2].mainImage).width(1200).height(1400)}
              alt={postData[2].mainImage.alt}
              className="home__imageSix"
            />
          </div>
          <div className="home__title">
            {postData[2].title} <br /> Watercolor on paper
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

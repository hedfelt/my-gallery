import React, { useState, useEffect } from "react";
import Daisy from "../../UI/Daisy/Daisy";
import "./Home.css";
import { motion } from "framer-motion";

const Home = (props) => {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const daisyDimensions = [
  //   { height: 100, width: 100 },
  //   { height: 120, width: 120 },
  //   { height: 140, width: 140 },
  //   { height: 200, width: 200 },
  // ];

  return (
    <div className="Intro">
      {/* <div className="daisyOne">
        <Daisy
          daisyHeight={daisyDimensions[0].height}
          daisyWidht={daisyDimensions[0].width}
        />
      </div>
      <div className="daisyTwo">
        <Daisy
          daisyHeight={daisyDimensions[1].height}
          daisyWidht={daisyDimensions[1].width}
        />
      </div>
      <div className="daisyThree">
        <Daisy
          daisyHeight={daisyDimensions[2].height}
          daisyWidht={daisyDimensions[2].width}
        />
      </div>
      <div className="flower-one">
        <div className="daisyFour">
          <Daisy
            daisyHeight={daisyDimensions[3].height}
            daisyWidht={daisyDimensions[3].width}
          />
          <div className="stilk"></div>
        </div> */}

      <div className="text_group">
        <div className="peek_text"> Take a peek..</div>
        <div className="pink_large_art_text">Art</div>
        <div className="portfolio_text">Portfolio</div>
      </div>
    </div>
  );
};

export default Home;

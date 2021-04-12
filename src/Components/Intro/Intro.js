import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  return (
    <Router className="Container">
      <ul>
        <li className="about">
          <Link className="linkItem" to="/about">
            ABOUT
          </Link>
        </li>

        <li className="works">
          <Link className="linkItem" to="/works">
            WORKS
          </Link>
        </li>

        <li className="contact">
          <Link className="linkItem" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </Router>
  );
};

export default Intro;

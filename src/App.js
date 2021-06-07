import "./App.css";
import React, { useState } from "react";
import Contact from "./Components/Contact//Contact/Contact";
import Home from "./Components/Home/Home";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import About from "./Components/About/About";
import Artworks from "./Components/Artworks/Artworks";
import SingleArtwork from "./Components/SingleArtwork/SingleArtwork";
import { Footer } from "./Components/Footer/Footer";
import Modal from "./Components/Navigation/Modal/Modal";
import Navbar from "./Components/Navigation/Navbar/Navbar";
import Blogpost from "./Components/Blogpost/Blogpost";

function App() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar
        className="navbar__sticky"
        iconChange={() => setShowModal(!showModal)}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Modal showModal={showModal} setShowModal={setShowModal} />

      <Switch location={location} key={location.key}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route component={Artworks} path="/artworks" />
        <Route component={SingleArtwork} path="/post/:slug" />

        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blogpost">
          <Blogpost />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;

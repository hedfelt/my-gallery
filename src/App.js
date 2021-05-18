import "./App.css";
import React from "react";
import Contact from "./Components/Contact//Contact/Contact";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./Components/About/About";
import Artworks from "./Components/Artworks/Artworks";
import SingleArtwork from "./Components/SingleArtwork/SingleArtwork";
import Navigation from "./Components/Navigation/Navigation/Navigation";
import Scrollbar from "smooth-scrollbar";

function App() {
  Scrollbar.init(document.querySelector("#my-scrollbar"));

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Artworks} path="/artworks" />
          <Route component={SingleArtwork} path="/post/:slug" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

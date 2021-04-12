import React, { useState, useEffect } from "react";

import "./App.css";
import { throttle } from "lodash";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Art from "./Components/Art/Art";
import NavigationItems from "./Components/Navigation/NavigationItems/NavigationItems";
import Parent from "./Components/Parent/Parent";

function App() {
  //scrollbarremover:
  // let body = document.body;
  // var scrollStop = function (callback) {
  //   if (!callback || typeof callback !== "function") return;
  //   var isScrolling;
  //   window.addEventListener(
  //     "scroll",
  //     function (event) {
  //       window.clearTimeout(isScrolling);
  //       body.classList.add("scrolling");
  //       isScrolling = setTimeout(function () {
  //         callback();
  //       }, 1300);
  //     },
  //     false
  //   );
  // };

  // scrollStop(function () {
  //   body.classList.remove("scrolling");
  // });
  return (
    <div>
      {/* <div className={scrolling ? "visibleBar" : "hiddenBar"}> */}
      <Parent />

      <Art />
    </div>
  );
}

export default App;

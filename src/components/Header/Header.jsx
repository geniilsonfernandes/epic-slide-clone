import React, { useState } from "react";
import SlideDesktop from "./SlideDesktop/SlideDesktop";
import SlideMobile from "./SlideMobile/SlideMobile";

import "./Header.css";

const Cover = () => {
  const [winWidth, setWinWidth] = useState(0);
  window.addEventListener("resize", () => {
    setWinWidth(window.innerWidth);
  });

  return (
    <div className="overnone"> 
    <header className="mwfit ">
      <div className="header" >
      {window.innerWidth >= 746 || winWidth >= 746 ? <SlideDesktop /> : <SlideMobile />}

      </div>
    </header>
    </div>
  );
};

export default Cover;

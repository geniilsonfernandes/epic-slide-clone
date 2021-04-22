import React, { useRef, useEffect, useState } from "react";

import "./SlideDesktop.css";

import Thumbnail from "./Thumbnail/Thumbnail";
import Slidephoto from "./Slidephoto/Slidephoto";

import slideContent from "../../../slide.json";


const Slide = ({games}) => {
  const delay = 6000;

  //refs
  const slideListEl = useRef();
  const thumbnailListEl = useRef();

  // states
  const [index, setIndex] = useState(0);
  const [slideList, setSlideListEl] = useState([]);
  const [thumbnailList, setThumbnailList] = useState([]);
  useEffect(() => {
    setSlideListEl(slideListEl.current.childNodes);
    setThumbnailList(thumbnailListEl.current.childNodes);
  }, [slideListEl]);

  function classlistchange(list, className, i) {
    list.forEach((item) => item.classList.remove(className));
    list[i].classList.add(className);
  }

  useEffect(() => {
    if (slideList.length > 0) {
      classlistchange(slideList, "active", index);
      classlistchange(thumbnailList, "active__thumb", index);
      classlistchange(
        slideList,
        "sliderprev",
        index === 0 ? slideList.length - 1 : index - 1
      );
    }
  }, [index, slideList, thumbnailList]);
  //-- timer
  const timeoutRef = useRef(null);
  //reset
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  //start
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex(index === slideList.length - 1 ? 0 : index + 1);
    }, delay);
    return () => {
      resetTimeout();
    };
  }, [index, slideList.length, delay]);

  return (
    <>
      <div className="cover__slide">
        <div ref={slideListEl} className="container_slide">
          {slideContent.map((game) => (
            <Slidephoto index={index} name={game.game_name} genre={game.genre} photo={game.game_photo} key={game.id} id={game.id} />
          ))}
        </div>
        <div ref={thumbnailListEl} className="container_thumbnail">
          {slideContent.map((thumb) => (
            <Thumbnail
              thumbnail={thumb.game_thumb}
              name={thumb.game_name}
              key={thumb.id}
              id={thumb.id}
              setIndex={setIndex}
              index={index}
              delay={delay}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slide;

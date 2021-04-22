import React, { useRef } from "react";
import "./SlideMobile.css";

import slideContent from "../../../slide.json";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

// Comps
import Card from "./Card/SlideMobileCard";

SwiperCore.use([Navigation, Pagination]);

const BigSlide = () => {
  const prevBtnEl = useRef(null);
  const nextBtnEl = useRef(null);

  const control = {
    prevEl: prevBtnEl.current,
    nextEl: nextBtnEl.current,
  };
  const nav = {
    el: ".big__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${className}></span>`;
    },
  };

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides="true"
        pagination={{ ...nav }}
        navigation={{ ...control }}
        tag="section"
        wrapperTag="div"
        className="big__slide"
      >
        {slideContent.map((game) => (
          <SwiperSlide key={game.id}>
            <Card
              name={game.game_name}
              genre={game.genre}
              photo={game.game_photo}
              
            />
          </SwiperSlide>
        ))}

        <div className="big__pagination"></div>
      </Swiper>
    </>
  );
};

export default BigSlide;

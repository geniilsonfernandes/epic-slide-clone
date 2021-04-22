import React from "react";
import "./Slidephoto.css";

import arrowLeft from "../../../../svg/arrow-left.svg";
const Slidephoto = ({ photo, id, index, name, genre }) => {
  return (
    <div className={`slide active`} data-slide={id}>
      <img src={require(`../../../../img/${photo}.png`).default} alt="" />
      
        <div className={`card__details ${index === id ? "into__left" : ""}`}>
          <div className="game">
            <span className="game__genre">{genre}</span>
            <div className="game__name">
              {name}
            </div>
          </div>
          <div className="card__btn">
            Play for free <img src={arrowLeft} alt="" />{" "}
          </div>
        </div>
     
    </div>
  );
};

export default Slidephoto;

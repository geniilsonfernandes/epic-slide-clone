import React from "react";
import './SlideMobileCard.css'





import arrowLeft from "../../../../svg/arrow-left.svg";


const SlideMobileCard = ({name, genre, photo}) => {
  return (
    <div className="slide__card">
      <div className="slide__card__img">
      <img src={require(`../../../../img/${photo}.png`).default} alt=""/>
      </div>
      <div className="slide__card__details">
        <div className="game">
          <span className="slide__game__genre">{genre}</span>
          <div className="slide__game__name">
            {name}
          </div>
        </div>
        <div className="slide__card__btn">Play for free <img src={arrowLeft} alt=""/> </div>
      </div>
    </div>
  );
};

export default SlideMobileCard;

import React from "react";
import './Thumbnail.css'


const Thumbnail = ({ thumbnail, name, setIndex, id, index, delay}) => {


  const style = {
    animationDuration: `${delay}ms`,
  };

  return (
    <div className={`thumbnail active__thumb ${index===id?"active__bar":''}`} onClick={() => setIndex(id)}>
      <div className="thumbnail__photo">
        <img src={require(`../../../../img/${thumbnail}.png`).default} alt={name} />
      </div>
      <div className="thumbnail__name">{name}</div>
      <div className={`thumbnail__bar ${index===id?"active__bar":''}`} style={style}></div>
    </div>
  );
};
export default Thumbnail;

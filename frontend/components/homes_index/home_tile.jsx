import React from 'react';

const HomeTile = (props) => {
  return (
    <div className="home-tile-container">
      <div className="home-image"><img src={props.home.image_url}></img></div>
      <div className="home-tile-desc-1">
        <span className="home-price">From ${props.home.price}  .  </span>
        <span className="home-title">{props.home.title}</span>
      </div>
      <div className="home-tile-desc-2">
        <span className="home-beds">{props.home.beds} beds, {props.home.baths} baths</span>
      </div>
    </div>
  );
}


export default HomeTile

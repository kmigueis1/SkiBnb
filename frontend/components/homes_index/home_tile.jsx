import React from 'react';
import { Link }  from 'react-router-dom';
import Stars from '../stars/stars'

const HomeTile = (props) => {
  let superhost;
  if(props.home.avgReviews === 5) {
    superhost = "Superhost";
  } else {
    superhost = "";
  }

  let avgReviews = props.home.numReviews > 0 ? (props.home.numReviews) : ("");
  return (
    <div className="home-tile-container">
      <Link to={`homes/${props.home.id}`}>
        <div className="home-image"><img src={props.home.image_url}></img></div>
      </Link>
      <Link to={`homes/${props.home.id}`}>
        <div className="home-tile-desc-1">
          <span className="home-price">From ${props.home.price}  .  </span>
          <span className="home-title">{props.home.title}</span>
        </div>
        <div className="home-tile-desc-2">
          <span className="home-beds">{props.home.beds} beds, {props.home.baths} baths</span>
        </div>
        <div className="home-tile-review">
          <div className="star-wrapper"><Stars numStars={props.home.avgReviews}/></div>
          <div className="num-reviews"><span>{avgReviews}</span></div>
          <div className="superhost"><span>{superhost}</span></div>
        </div>
      </Link>
    </div>
  );
}


export default HomeTile

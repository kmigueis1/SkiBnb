
import React from 'react'

const Stars = (props) => {
  let stars = [];
  for (let i = 0; i < props.numStars; i++) {
    stars.push(<i className="fa fa-star"></i>)
  }
  return (
    <div className="stars">
      {stars}
    </div>

  );
};

export default Stars;

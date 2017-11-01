import React from 'react';
import Stars from '../stars/stars'


const HomeReviewItem = (props) => {

  const months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec"
  }

  let review = props.review;
  let postingDate = review.created_at.split("-");
  let postingDateYear = postingDate[0];
  let postingDateMonth = months[parseInt(postingDate[1])];
  console.log(postingDateYear);
  console.log(postingDateMonth);
  console.log("this is supposed to be a review: ", review);
  console.log("hello there miss daisy");
  return(
    <div className="review-item">
      <div className="review-item-header">
        <div className="avatar"><img src={review.author_image}></img></div>
        <div className="name-date-wrapper">
          <div className="user-name"><span>{review.first_name}</span></div>
          <div className="posting-date"><span>{postingDateMonth} {postingDateYear}</span></div>
        </div>
        <div className="stars-wrapper">
          <Stars numStars={review.rating}/>
        </div>
      </div>
      <div className="review-body"><p>{review.body}</p></div>
    </div>
  );
};


export default HomeReviewItem;

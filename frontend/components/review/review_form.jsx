import React from 'react';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    return(
      <div className="review-form">
        <div className="review-form-banner">
          <span>Leave a Review</span>
        </div>
        <div className="review-form-container">
        </div>
        <form>
          <textarea></textarea>
          <button>Submit Review</button>
        </form>        
      </div>
    );
  }
}
export default ReviewForm;

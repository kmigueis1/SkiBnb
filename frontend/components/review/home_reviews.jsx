import React from 'react';
import HomeReviewItem from './home_review_item';

class HomeReviews extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchReviews(this.props.homeId)
  }

  render(){
    let homeReviewItems = Object.values(this.props.reviews).map((review) => {
      return (
        <HomeReviewItem key={review.id} review={review}/>
      );
    });
    return(
      <div className="reviews-index">
        <div className="reviews-header"><span>{homeReviewItems.length} Reviews</span></div>
        {homeReviewItems}
      </div>
    );
  }


}

export default HomeReviews;

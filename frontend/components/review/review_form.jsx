import React from 'react';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rating: 0,
      body: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createReview({
      rating: this.state.rating,
      body: this.state.body,
      booking_id: this.props.match.params.booking_id
    });
    this.props.history.push("/account/bookings");
  }

  handleBody(e){
    this.setState({ body: e.target.value });
  }

  handleRadio(e){
    this.setState({ rating: e.target.value });
  }


  render(){
    let checked = "checked";
    let starred = [];

    for(let i = 0; i <= this.state.rating; i ++){
      starred.push("higlighted");
    }
    return(
      <div className="review-form-page">
        <div className="review-form-container ">
          <div className="review-form-banner">
            <span>Leave a Review</span>
          </div>
          <div className="review-form">
            <div className="review-form-message">
              <p>Reviews are written at the end of a reservation through SkiBnB.</p>
            </div>
            <div className="stars-div">
              <i className={`fa fa-star ${starred[1]}`}></i>
              <i className={`fa fa-star ${starred[2]}`}></i>
              <i className={`fa fa-star ${starred[3]}`}></i>
              <i className={`fa fa-star ${starred[4]}`}></i>
              <i className={`fa fa-star ${starred[5]}`}></i>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="star-rating">
                <input onChange={this.handleRadio} type="radio" name="star" value="1"></input>
                <input onChange={this.handleRadio} type="radio" name="star" value="2"></input>
                <input onChange={this.handleRadio} type="radio" name="star" value="3"></input>
                <input onChange={this.handleRadio} type="radio" name="star" value="4"></input>
                <input onChange={this.handleRadio} type="radio" name="star" value="5"></input>
              </div>
              <div className="review-body">
                <textarea className="review-text-area" onChange={this.handleBody} value={this.state.body}></textarea>
              </div>
              <button>Submit Review</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}
export default ReviewForm;

import React from 'react';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rating: 0,
      body: ""
    }
    console.log("props: ", props);
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
    return(
      <div className="review-form">
        <div className="review-form-banner">
          <span>Leave a Review</span>
        </div>
        <div className="review-form-container">
        </div>
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleRadio} type="radio" name="star" value="1"></input>
            <input onChange={this.handleRadio} type="radio" name="star" value="2"></input>
            <input onChange={this.handleRadio} type="radio" name="star" value="3"></input>
            <input onChange={this.handleRadio} type="radio" name="star" value="4"></input>
            <input onChange={this.handleRadio} type="radio" name="star" value="5"></input>

            <textarea onChange={this.handleBody} value={this.state.body}></textarea>
          <button>Submit Review</button>
        </form>
      </div>
    );
  }
}
export default ReviewForm;

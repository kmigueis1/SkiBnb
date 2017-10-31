import React from 'react';
import { Link } from 'react-router-dom';
class BookingWidget extends React.Component {

  constructor(props){
    super(props);
    // let currentTime =
    this.state = {
      startDate: "",
      endDate: "",
      selected: "1 guest",
      userMessage: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSubmit(e){
    console.log("currentUser: ", this.props.currentUser);
    e.preventDefault();
    if(this.props.currentUser){
      console.log("valid booking");
      this.props.createBooking(
        {
          start_date: this.state.startDate,
          end_date: this.state.endDate,
          user_id: this.props.currentUser.id,
          home_id: this.props.homeId
        }
      );
      this.setState({userMessage: "Congratulations, you successfully created a booking!"})
      this.props.history.push("/account/bookings");
    } else {
      this.setState({userMessage: "Please sign in to make a booking."})
    }
  }

  handleStartDate(e){
    this.setState({ startDate: e.target.value });
  }

  handleEndDate(e){
    this.setState({ endDate: e.target.value });
  }

  handleSelect(e){
    this.setState({selected: e.target.value})
  }


  render(){
    let options = [];
    for(let i = 1; i <= this.props.maxGuests; i++){
      options.push(<option key={i} value={i}>{i + " guest"}</option>)
    }
    console.log(this.state.userMessage);
    return(
      <div className="booking-widget">
        <div className="booking-price-bar">
          <div className="price-spans">
            <span className="booking-span1">${`${this.props.price}`} </span>
            <span className="booking-span2">per night</span>
          </div>
        </div>
        <div className="booking-form-div">
        <div className="booking-user-message"><span>{this.state.userMessage}</span></div>
        <form onSubmit={this.handleSubmit}>
          <div className="date-inputs">
            <div className="check-in">
              <label>Check In </label>
              <input type="date" className="startDate" onChange={this.handleStartDate} value={this.state.startDate}></input>
            </div>
            <div className="check-out">
              <label>Check Out</label>
              <input type="date" className="endDate" onChange={this.handleEndDate} value={this.state.endDate}></input>
            </div>
          </div>
          <div className="guest-selector">
            <label>Guests</label>
            <select onChange={this.handleSelect} value={this.state.selected}>
              {options}
            </select>
          </div>
          <div className="booking-submit">
              <button>Book</button>
          </div>
        </form>
        <div className="charge-message">
          <span>You won't be charged yet</span>
        </div>
      </div>
      </div>

    );
  }
}
export default BookingWidget;

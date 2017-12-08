import React from 'react';
import { Link } from 'react-router-dom';
import { createDateObject } from '../../util/miscellaneous';
class BookingWidget extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      selected: "1 guest",
      userMessage: "",
      fixed: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    this.props.fetchBookings();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e){
    if(!this.state.fixed && window.scrollY >= 448){
      this.setState({fixed: true})
    } else if (this.state.fixed && window.scrollY < 448) {
      this.setState({fixed: false})
    } else {

    }
  }

  handleSubmit(e){
    e.preventDefault();



    const between = (comp, num1, num2) => {
      if ((comp > num1 && comp < num2) || (comp > num2 && comp < num1)){
        return true;
      }
      return false;
    }

    const intersects = (booking1, booking2) => {
      let start1 = booking1.start_date;
      let end1 = booking1.end_date;
      let start2 = booking2.start_date;
      let end2 = booking2.end_date;

      if(between(start1, start2, end2) || between(end1, start2, end2)){
        return true;
      }
      return false;
    };

    let userBookings = Object.values(this.props.bookings);
    let proposedBooking = {
      start_date: this.state.startDate,
      end_date: this.state.endDate
    }

    let valid = true;
    userBookings.forEach((booking) => {
      if(intersects(proposedBooking, booking)){
        valid = false;
      }
    });

    let start = createDateObject(this.state.startDate).getTime();
    let end = createDateObject(this.state.endDate).getTime();

    if(this.props.currentUser && start < end && valid){
      this.props.createBooking(
        {
          start_date: this.state.startDate,
          end_date: this.state.endDate,
          user_id: this.props.currentUser.id,
          home_id: this.props.homeId
        }
      );
      this.props.history.push("/account/bookings");
    } else if(!this.props.currentUser) {
      this.setState({userMessage: "Please sign in to make a booking."})
    } else if(!valid) {
      this.setState({userMessage: "Your proposed booking conflicts with an existing booking."})
    } else {
      this.setState({userMessage: "Please pick appropriate dates."})
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

    let fixed = this.state.fixed ? ("fixed-widget") : ("")
    return(
      <div className={`booking-widget ${fixed}`}>
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

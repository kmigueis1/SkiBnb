import React from 'react';
import BookingItem from './booking_item';

class UserBookings extends React.Component{
  constructor(props){
    super(props);
  }


  componentDidMount(){
    this.props.fetchBookings();
  }



  render(){
    console.log("Hellooooo IM HERE", this.props);
    const createBookingDate = (booking) => {
      let endDate = booking.end_date.split("-");
      let endDateYear = parseInt(endDate[0]);
      let endDateMonth = parseInt(endDate[1]);
      let endDateDay = parseInt(endDate[2]);
      let bookingDate = new Date(endDateYear, endDateMonth - 1, endDateDay);
      return bookingDate;
    }
    let currentDate = new Date();

    let currentBookings = this.props.bookings.map((booking) => {

      let bookingDate = createBookingDate(booking);
      if (bookingDate.getTime() >= currentDate.getTime())
      return (<BookingItem key={booking.id} booking={booking} deleteBooking={this.props.deleteBooking} time="current"/>)
    });

    let pastBookings = this.props.bookings.map((booking) => {

      let bookingDate = createBookingDate(booking);
      if (bookingDate.getTime() < currentDate.getTime())
      return (<BookingItem key={booking.id} booking={booking} deleteBooking={this.props.deleteBooking} time="past"/>)
    });

    return(
      <div className="user-bookings-container">
        <div className="trips-header"><span>Current Trips</span></div>
        <div className="bookings-container current-bookings-container">
            {currentBookings}
        </div>
        <div className="bookings-container past-bookings-container">
          <div className="trips-header"><span>Past Trips</span></div>
            {pastBookings}
        </div>
      </div>
    );
  }
}


export default UserBookings;

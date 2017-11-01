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
    let currentBookings = this.props.bookings.map((booking) => {
      console.log(booking);
      return (<BookingItem key={booking.id} booking={booking} deleteBooking={this.props.deleteBooking}/>)
    });

    return(
      <div className="user-bookings-container">
        <div className="trips-header"><span>Current Trips</span></div>
        <div className="bookings-container">
          <div className="current-bookings-container">
            
          </div>
          {currentBookings}
        </div>
      </div>
    );
  }
}


export default UserBookings;

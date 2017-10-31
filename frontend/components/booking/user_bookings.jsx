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
    let bookings = this.props.bookings.map((booking) => {
      return (<BookingItem key={booking.id} booking={booking}/>)
    });

    return(
      <div className="user-bookings-container">
        <div className="trips-header"><span>Current Trips</span></div>
        <div className="bookings-container">
          {bookings}
        </div>
      </div>
    );
  }
}


export default UserBookings;

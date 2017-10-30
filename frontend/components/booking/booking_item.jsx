import React from 'react';

class BookingItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="booking-item">
        <div className="booking-photo"></div>
        <div className="booking-summary">
          <div className="booking-title">{this.props.booking.start_date}<span></span></div>
        </div>
      </div>
    );
  }
};

export default BookingItem

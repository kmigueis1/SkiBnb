import React from 'react';
import { Link }  from 'react-router-dom';

class BookingItem extends React.Component{
  constructor(props){
    super(props);
    console.log(props);

    this.months = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec"
    }
  }

  render(){
    let booking = this.props.booking;
    let startDate = booking.start_date.split("-");
    let startDateYear = startDate[0];
    let startDateMonth = parseInt(startDate[1]);
    let startDateDay = startDate[2];

    let endDate = booking.end_date.split("-");
    let endDateYear = endDate[0];
    let endDateMonth = parseInt(endDate[1]);
    let endDateDay = endDate[2];
    let hostImage = booking.host_image;
    console.log(this.props);
    return(
      <div className="booking-item">
        <div className="host-photo">
          <div className="host-photo-radius">
            <img src={hostImage}></img>
          </div>
        </div>
        <div className="booking-photo">
          <Link to={`/homes/${booking.home_id}`}>
            <img src={booking.image_url}></img>
          </Link>
          </div>
        <div className="booking-summary">
          <div className="booking-title"><span>{booking.title}</span></div>
          <div className="booking-dates">
            <span>{this.months[startDateMonth]} {startDateDay} - {this.months[endDateMonth]} {endDateDay}, {endDateYear}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default BookingItem

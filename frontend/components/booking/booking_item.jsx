import React from 'react';

class BookingItem extends React.Component{
  constructor(props){
    super(props);
    console.log(props);

    this.months = {
      "01": "Jan",
      "02": "Feb",
      "03": "Mar",
      "04": "Apr",
      "05": "May",
      "06": "Jun",
      "07": "Jul",
      "08": "Aug",
      "09": "Sep",
      "10": "Oct",
      "11": "Nov",
      "12": "Dec"
    }
  }

  render(){
    let booking = this.props.booking;
    let startDate = booking.start_date.split("-");
    let startDateYear = startDate[0];
    let startDateMonth = startDate[1];
    let startDateDay = startDate[2];

    let endDate = booking.end_date.split("-");
    let endDateYear = endDate[0];
    let endDateMonth = endDate[1];
    let endDateDay = endDate[2];


    console.log(startDate);
    return(
      <div className="booking-item">
        <div className="booking-photo"><img src={booking.image_url}></img></div>
        <div className="booking-summary">
          <div className="booking-title"><span>{booking.title}</span></div>
          <div className="booking-dates">
            <span>`${this.months[startDateMonth]} ${startDateDay} - ${this.month[endDateMonth]} ${endDateDay}, endDateYear`</span>
          </div>
        </div>
      </div>
    );
  }
};

export default BookingItem

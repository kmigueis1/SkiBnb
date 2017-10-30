import React from 'react';

class BookingWidget extends React.Component {

  constructor(props){
    super(props);
    // let currentTime =
    this.state = {
      startDate: "2018-01-20",
      endDate: "2018-01-28",
      selected: "1 guest"
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
          home_id: this.homeId
        }
      );
    } else {

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
    return(
      <div className="booking-widget">
        <form onSubmit={this.handleSubmit}>
          <input type="date" className="startDate" onChange={this.handleStartDate} value={this.state.startDate}></input>
          <input type="date" className="endDate" onChange={this.handleEndDate} value={this.state.endDate}></input>
          <select onChange={this.handleSelect} value={this.state.selected}>
            {options}
          </select>
          <button>Book</button>
        </form>
      </div>

    );
  }
}
export default BookingWidget;

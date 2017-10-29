import React from 'react';


class HomeShow extends React.Component {
  componentWillMount(){
    this.props.fetchHome(this.props.match.params.id);
  }

  render(){
    let home = this.props.home;

    if(!home || !home.amenities) {
      return null;
    }
    let amenities = Object.keys(home.amenities).map((amenity)=>{
      return (<div key={amenity}><i className={amenity}></i><span>{amenity}</span></div>);
    })
    let cleaningFee = (home.price * 0.15);
    let sleepingArrangements = [];
    for(let i = 0; i < home.beds; i++){
      sleepingArrangements.push(<div key={i}>
        <i></i>
        <span>Bedroom {i}</span>
        <span>{home.beds} double beds</span>
      </div>);
    }

    return (
      <div className="home-show-container">
        <div className="image-container"><img src={home.image_url} /></div>
        <div className="home-show-body">
          <div className="home-show-nav">
            <span>
              <a>Overview</a>
              <a>Reviews</a>
              <a>The Host</a>
              <a>Location</a>
            </span>

          </div>
          <div className="home-show-content">
            <div className="home-summary">
              <h1>{home.title}</h1>
              <div className="home-stats">
                <span><i className=""></i>{home.maxGuests} guests</span>
                <span><i className=""></i>{home.bedrooms} bedrooms</span>
                <span><i className=""></i>{home.beds} beds</span>
                <span><i className=""></i>{home.baths} baths</span>
              </div>
              <div className="description">
                <span>The Space</span>
                <p>{home.description}</p>
              </div>
          </div>
            <div className="amenities">
              <div className="section-title">Amenities</div>
              <div>{amenities}</div>
            </div>
            <div className ="prices">
              <div className="section-title">Prices</div>
              <div>Weekly Discount: <span>None</span></div>
              <div>Cleaning Fee <span>{cleaningFee}</span></div>
            </div>
            <div className="sleeping-arrangements">
              <div className="section-title">Sleeping Arrangements</div>
              <div className="content">{sleepingArrangements}</div>
            </div>
            <div className="cancellations">
              <div className="section-title">Cancellations</div>
              <div>{home.cancellation}</div>
              <div>Cancel up to 7 days before check in and get a 50% refund (minus service fees). Cancel within 7 days of your trip and the reservation is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.</div>
            </div>
            <div className="availability">
              <div className="section-title">Availability</div>
              <div><span>{home.minStay} night</span> minimum stay</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}


export default HomeShow;

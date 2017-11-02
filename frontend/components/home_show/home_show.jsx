import React from 'react';
import BookingWidgetContainer from '../booking/booking_widget_container';
import HomeReviewsContainer from '../review/home_reviews_container';

class HomeShow extends React.Component {
  // componentWillMount(){
  //   this.props.fetchHome(this.props.match.params.id);
  // }

  componentDidMount(){
    this.props.fetchHome(this.props.match.params.id);
  }

  render(){
    console.log("Im in homeshow");
    console.log(this.props)
    let home = this.props.home;

    if(!home || !home.amenities) {
      return null;
    }

    let cleaningFee = (home.price * 0.15);
    // let sleepingArrangements = [];
    // for(let i = 0; i < home.beds; i++){
    //   sleepingArrangements.push(<div key={i}>
    //     <i></i>
    //     <span>Bedroom {i}</span>
    //     <span>2 double beds</span>
    //   </div>);
    // }

    const backgroundImageStyles = {
      backgroundImage: `url(${home.image_url})`
    };
    // <img src={home.image_url} />
    // <div className="home-show-nav">
    //   <a href="#overview">Overview</a>
    //   <a href="#reviews">Reviews</a>
    //   <a href="#host">The Host</a>
    //   <a href="#location">Location</a>
    // </div>

    return (
      <div className="home-show-container">
        <div className="image-container"><div className="image" style={backgroundImageStyles}></div></div>
        <div className="home-show-body">
          <div className="home-show-centered">
            <div className="home-show-content">
              <div className="home-summary">
                <div>
                  <h1>{home.title}</h1>
                  <span>Entire Home</span>
                </div>

                <div className="home-stats">
                  <span><i className="icon fa fa-users"></i>{home.maxGuests} guests</span>
                  <span><i className="icon fa fa-home"></i>{home.bedrooms} bedrooms</span>
                  <span><i className="icon fa fa-bed"></i>{home.beds} beds</span>
                  <span><i className="icon fa fa-bathtub"></i>{home.baths} baths</span>
                </div>
                <div className="description">
                  <span>The Space</span>
                  <p>{home.description}</p>
                </div>
            </div>
              <div className="section amenities">
                <div className="section-title">Amenities</div>
                <div className="content">
                  <div><i className="icon fa fa-spoon"></i>Kitchen</div>
                  <div><i className="icon fa fa-tv"></i>TV</div>
                  <div><i className="icon fa fa-wifi"></i>WiFi</div>
                  <div><i className="icon fa fa-shopping-basket"></i>Washer</div>
                  <div><i className="icon fa fa-sun-o"></i>Dryer</div>
                  <div><i className="icon fa fa-car"></i>Parking</div>
                </div>
              </div>
              <div className ="section prices">
                <div className="section-title">Prices</div>
                <div>Weekly Discount: <span>None</span></div>
                <div>Cleaning Fee <span>${cleaningFee}</span></div>
              </div>
              <div className="section sleeping-arrangements">
                <div className="section-title">Sleeping Arrangements</div>
                <div className="content">
                  <div className="item"><i className="icon fa fa-bed"></i><div>Bedroom 1</div><span>1 queen bed</span></div>
                  <div className="item"><i className="icon fa fa-bed"></i><div>Bedroom 2</div><span>1 double bed</span></div>
                </div>
              </div>
              <div className="section cancellations">
                <div className="section-title">Cancellations</div>
                <div>{home.cancellation}</div>
                <div>Cancel up to 7 days before check in and get a 50% refund (minus service fees). Cancel within 7 days of your trip and the reservation is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.</div>
              </div>
              <div className="section availability">
                <div className="section-title">Availability</div>
                <div>{home.minStay} night<span> minimum stay</span></div>
              </div>
              <HomeReviewsContainer homeId={home.id}/>
            </div>
            <BookingWidgetContainer homeId={home.id} maxGuests={home.maxGuests}  price={home.price}/>
          </div>
        </div>
      </div>
    );
  }

}


export default HomeShow;

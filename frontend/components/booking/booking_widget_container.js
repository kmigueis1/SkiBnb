import { connect } from 'react-redux';
import { createBooking, fetchBookings } from '../../actions/booking_actions';
import { withRouter } from 'react-router-dom';
import BookingWidget from './booking_widget';

const mapStateToProps = (state, ownProps) => {
  return {
    maxGuests: ownProps.maxGuests,
    homeId: ownProps.homeId,
    price: ownProps.price,
    currentUser: state.session.currentUser,
    bookings: state.entities.bookings
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBooking: (booking) => (dispatch(createBooking(booking))),
    fetchBookings: () => (dispatch(fetchBookings()))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingWidget));

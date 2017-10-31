import { connect } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';
import { withRouter } from 'react-router-dom';
import BookingWidget from './booking_widget';

const mapStateToProps = (state, ownProps) => {
  console.log(state.session.currentUser);
  return {
    maxGuests: ownProps.maxGuests,
    homeId: ownProps.homeId,
    price: ownProps.price,
    currentUser: state.session.currentUser
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBooking: (booking) => (dispatch(createBooking(booking)))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingWidget));

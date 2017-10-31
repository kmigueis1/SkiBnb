import { connect } from 'react-redux';
import { deleteBooking, updateBooking, fetchBookings, fetchBooking } from '../../actions/booking_actions';
import { withRouter } from 'react-router-dom';
import UserBookings from './user_bookings';

const mapStateToProps = (state, ownProps) => {
  return {
    bookings: Object.values(state.entities.bookings),
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteBooking: (id) => (dispatch(deleteBooking(id))),
    updateBooking: (booking) => (dispatch(updateBooking(booking))),
    fetchBookings: () => (dispatch(fetchBookings()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBookings);

import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions';


const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ALL_BOOKINGS:
      newState = Object.assign({}, {}, action.bookings);
      return newState;
    case RECEIVE_BOOKING:
      newState = Object.assign({}, state, {[action.booking.id]: action.booking});
      return newState;
    case REMOVE_BOOKING:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default: return state;
  }
};

export default BookingsReducer;

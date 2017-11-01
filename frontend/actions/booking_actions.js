import * as ApiUtil from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveAllBookings = (bookings) => {
  return {
    type: RECEIVE_ALL_BOOKINGS,
    bookings: bookings
  };
};

export const receiveBooking = (booking) => {
  return {
    type: RECEIVE_BOOKING,
    booking: booking
  };
};

export const removeBooking = (id) => {
  return {
    type: REMOVE_BOOKING,
    id: id
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
  };
};


//thunks

export const fetchBookings = () => (dispatch) => {
  console.log("im in fetchbookings");
  return ApiUtil.fetchBookings().then((bookings) => (dispatch(receiveAllBookings(bookings))));
}

export const fetchBooking = (id) => (dispatch) => {
  return ApiUtil.fetchBooking(id).then((booking) => (dispatch(receiveBooking(booking))));
}

export const createBooking = (booking) => (dispatch) => {
  console.log(booking);
  return ApiUtil.createBooking(booking).then((booking) => (dispatch(receiveBooking(booking))));
};

export const updateBooking = (booking) => (dispatch) => {
  return ApiUtil.updateBooking(booking).then((booking) => (dispatch(receiveBooking(booking))));
};

export const deleteBooking = (id) => (dispatch) => {
  return ApiUtil.deleteBooking(id).then((booking) => (dispatch(removeBooking(booking.id))));
};

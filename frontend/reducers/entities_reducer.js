import HomesReducer from './homes_reducer';
import BookingsReducer from './bookings_reducer';
import ReviewsReducer from './reviews_reducer';
import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
  homes: HomesReducer,
  bookings: BookingsReducer,
  reviews: ReviewsReducer
});


export default EntitiesReducer;

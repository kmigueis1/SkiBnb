import HomesReducer from './homes_reducer';
import BookingsReducer from './bookings_reducer';
import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
  homes: HomesReducer,
  bookings: BookingsReducer,
});


export default EntitiesReducer;

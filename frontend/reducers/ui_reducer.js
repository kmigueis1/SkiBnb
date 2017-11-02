import FilterReducer from './filter_reducer';
import LocationReducer from './location_reducer';
import { combineReducers } from 'redux';

const UiReducer = combineReducers({
  filters: FilterReducer,
  location: LocationReducer
});

export default UiReducer;

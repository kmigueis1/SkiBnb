import FilterReducer from './filter_reducer';
import LocationReducer from './location_reducer';
import DropDownReducer from './drop_down_reducer';
import LoadingReducer from './loading_reducer';
import { combineReducers } from 'redux';

const UiReducer = combineReducers({
  filters: FilterReducer,
  location: LocationReducer,
  dropdown: DropDownReducer,
  loader: LoadingReducer
});

export default UiReducer;

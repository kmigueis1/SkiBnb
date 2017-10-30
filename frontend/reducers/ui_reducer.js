import FilterReducer from './filter_reducer';
import { combineReducers } from 'redux';

const UiReducer = combineReducers({
  filters: FilterReducer
});

export default UiReducer;

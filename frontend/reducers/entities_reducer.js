import HomesReducer from './homes_reducer';
import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
  homes: HomesReducer
});

export default EntitiesReducer;

import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
});

export default RootReducer;

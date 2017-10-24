
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const SessionErrorsReducer = (state = { sessionErrors: [] } , action ) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state);
      newState.sessionErrors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState = Object.assign({}, state);
      newState.sessionErrors = action.sessionErrors;
      return newState;
    default: return state;
  }
}

export default SessionErrorsReducer;

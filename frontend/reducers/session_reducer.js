import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SessionReducer = (state = { currentUser: null }, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
    Object.freeze(state);
    const newState = Object.assign({}, state);
    newState.currentUser = action.currentUser;
    return newState;
    default: return state;

  }
};

export default SessionReducer;

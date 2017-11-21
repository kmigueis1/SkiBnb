import { RECEIVE_LOCATION, RESET_LOCATION } from '../actions/search_actions';

const LocationReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_LOCATION:
      newState = Object.assign({}, state, action.location, { setLocation: action.setLocation });
      return newState;
    case RESET_LOCATION:
      newState = Object.assign({}, state, { setLocation: action.setLocation });
      return newState;
    default: return state;
  }
};

export default LocationReducer;

import { RECEIVE_LOCATION } from '../actions/search_actions';


const LocationReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_LOCATION:
      newState = Object.assign({}, state, action.location, action.setLocation);
      return newState;
    default: return state;
  }
};

export default LocationReducer;

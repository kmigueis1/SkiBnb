import { RECEIVE_ALL_HOMES, RECEIVE_HOME, REMOVE_HOME } from '../actions/home_actions';


const HomesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ALL_HOMES:
      console.log("action.homes: ", action.homes);
      newState = Object.assign({}, state, action.homes);
      newState = action.homes;
      return newState;
    case RECEIVE_HOME:
      newState = Object.assign({}, state, {[action.home.id]: action.home});
      return newState;
    case REMOVE_HOME:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default: return state;
  }
};

export default HomesReducer;

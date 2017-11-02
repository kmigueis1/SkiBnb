import { TOGGLE_DROPDOWN } from '../actions/ui_actions';

const DropDownReducer = (state = { open: false }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case TOGGLE_DROPDOWN:
      newState = Object.assign({}, state, {open: false});
      return newState;
    default: return state;
  }
};

export default DropDownReducer;

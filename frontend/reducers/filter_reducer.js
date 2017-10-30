
import { UPDATE_BOUNDS } from '../actions/filter_actions'
const FilterReducer = (state = {}, action) => {
  console.log("I'm inside FilterReducer");
  console.log("action.type is: ", action.type)
  console.log("action.bounds is: ", action.bounds);
  let newState;
  switch(action.type){
    case UPDATE_BOUNDS:
      newState = Object.assign({}, state, { bounds: action.bounds })
      return newState;
    default: return state;
  }
}

export default FilterReducer;

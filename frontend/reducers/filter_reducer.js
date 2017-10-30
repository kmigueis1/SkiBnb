
import { UPDATE_BOUNDS } from '../actions/filter_actions'
const FilterReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case UPDATE_BOUNDS:
      newState = Object.assign({}, state, { bounds: action.bounds })
      return newState;
    default: return state;
  }
}

export default FilterReducer;

import { STOP_LOADING } from '../actions/ui_actions';


const LoadingReducer = (state = { loading: true }, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case STOP_LOADING:
      newState = Object.assign({}, state, {loading: false} );
      return newState;
    default: return state;
  }
};

export default LoadingReducer;


import { fetchHomes } from './home_actions'
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

// export const updateBounds = (bounds) => {
//   return {
//     type: UPDATE_BOUNDS,
//     bounds: bounds
//   };
// }

export const updateBounds = (bounds) => {
  console.log("Im in updatebound");
  return (dispatch, getState) => {
    dispatch(changeFilter(bounds));
    console.log("I'm between changeFilter and fetchHomes in UpdateBounds");
    return fetchHomes(getState().ui.filters)(dispatch);
  };
};

export const changeFilter = (bounds) => {
  console.log("I'm in changeFilter and will send an UPDATE_BOUNDS action object");
  return {
    type: UPDATE_BOUNDS,
    bounds: bounds
  };
};

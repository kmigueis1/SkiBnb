
import { fetchHomes } from './home_actions'
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

// export const updateBounds = (bounds) => {
//   return {
//     type: UPDATE_BOUNDS,
//     bounds: bounds
//   };
// }

export const updateBounds = (bounds) => {
  return (dispatch, getState) => {
    dispatch(changeFilter(bounds));
    return fetchHomes(getState().ui.filters)(dispatch);
  };
};

export const changeFilter = (bounds) => {
  return {
    type: UPDATE_BOUNDS,
    bounds: bounds
  };
};

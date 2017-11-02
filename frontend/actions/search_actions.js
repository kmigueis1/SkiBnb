import * as ApiUtil from '../util/search_api_util';

export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RESET_LOCATION = 'RESET_LOCATION';

export const receiveLocation = (location) => {
  return {
    type: RECEIVE_LOCATION,
    location: location,
    setLocation: true
  };
};

export const resetLocation = () => {
  return {
    type: RESET_LOCATION,
    setLocation: false
  }
}

export const searchLocation = (query) => (dispatch) => {
  return ApiUtil.searchLocation(query).then((location) => (dispatch(receiveLocation(location))));
}

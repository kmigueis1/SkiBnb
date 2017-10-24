
import * as ApiUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => {

  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: user
  };
};


export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    sessionErrors: errors.responseJSON
  };
};

export const login = (user) => (dispatch) => {

  return ApiUtil.login(user)
  .then((user) => {
    dispatch(receiveCurrentUser(user));
  },
  (errors) => {
    dispatch(receiveErrors(errors));
  });
};

export const logout = () => (dispatch) => {
  return ApiUtil.logout()
  .then(() => {
    dispatch(receiveCurrentUser(null));
  },
  (errors) => {
    dispatch(receiveErrors(errors));
  });
};

export const signup = (user) => (dispatch) => {
  return ApiUtil.signup(user)
  .then((user) => {
    dispatch(receiveCurrentUser(user));
  },
  (errors) => {
    dispatch(receiveErrors(errors));
  });
};

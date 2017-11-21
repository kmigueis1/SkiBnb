import * as ApiUtil from '../util/home_api_util';
import { stopLoading } from './ui_actions'
export const RECEIVE_ALL_HOMES = 'RECEIVE_ALL_HOMES';
export const RECEIVE_HOME = 'RECEIVE_HOME';
export const REMOVE_HOME = 'REMOVE_HOME'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveAllHomes = (homes) => {
  return {
    type: RECEIVE_ALL_HOMES,
    homes: homes
  };
};

export const receiveHome = (home) => {
  return {
    type: RECEIVE_HOME,
    home: home
  };
};

export const removeHome = (id) => {
  return {
    type: REMOVE_HOME,
    id: id
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
  };
};


//thunks


export const fetchHomes = (filters) => (dispatch) => {
  return ApiUtil.fetchHomes(filters).then((homes) => (dispatch(receiveAllHomes(homes)))).then(() => dispatch(stopLoading()));
}

export const fetchHome = (id) => (dispatch) => {
  return ApiUtil.fetchHome(id).then((home) => (dispatch(receiveHome(home))));
}

export const createHome = (home) => (dispatch) => {
  return ApiUtil.createHome(home).then((home) => (dispatch(receiveHome(home))));
};

export const updateHome = (home) => (dispatch) => {
  return ApiUtil.updateHome(home).then((home) => (dispatch(receiveHome(home))));
};

export const deleteHome = (home) => (dispatch) => {
  return ApiUtil.deleteHome(home).then((home) => (dispatch(removeHome(home))));
};















//

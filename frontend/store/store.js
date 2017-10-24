import RootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {} ) => {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  );
};


export default configureStore;

import RootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const wares = [thunk];

if (process.env.NODE_ENV !== 'production'){
  const { logger } = require('redux-logger');
  wares.push(logger);
}

const configureStore = (preloadedState = {} ) => {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...wares)
  );
};


export default configureStore;

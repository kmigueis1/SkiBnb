import * as action from './actions/session_actions';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchHomes } from './util/home_api_util';
import { fetchBookings, fetchBooking, createBooking, updateBooking, deleteBooking } from './util/booking_api_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if(window.currentUser){
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else{
    store = configureStore();
  }
  
  window.fetchBookings = fetchBookings;
  window.fetchBooking = fetchBooking;
  window.createBooking = createBooking;
  window.updateBooking = updateBooking;
  window.deleteBooking = deleteBooking;
  window.fetchHomes = fetchHomes;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, root);
});

import * as ApiUtil from './util/session_api_util';
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.login = ApiUtil.login;
  window.logout = ApiUtil.logout;
  window.signup = ApiUtil.signup;
  ReactDOM.render(<h1>Welcome to SkiBnb</h1>, root);
});

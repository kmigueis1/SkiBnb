
import React from 'react';
import {Route} from 'react-router-dom';
import SearchBar from '../search_bar/search_bar';
import AccountBar from '../account_bar/account_bar';

const NavBar = () => (
  <div className="nav-bar">
    <div className="home-button">
      
    </div>
    <SearchBar />
    <AccountBar />
  </div>
);

export default NavBar;

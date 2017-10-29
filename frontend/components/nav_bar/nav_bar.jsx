
import React from 'react';
import {Route} from 'react-router-dom';
import SearchBar from '../search_bar/search_bar';
import AccountBar from '../account_bar/account_bar';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="nav-bar">
    <div className='left-nav'>
      <div className="home-button-container">
        <Link to='/' className="home-button-link">
          <div  className="home-button">
          </div>    
        </Link>

      </div>
      <SearchBar />
    </div>
    <div className='right-nav'>
      <AccountBar />
    </div>
  </div>
);

export default NavBar;

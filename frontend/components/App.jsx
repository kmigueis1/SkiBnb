import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, UserRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar';
import UserEditFormContainer from './user_edit/user_edit_form_container';
import HomesIndexContainer from './homes_index/homes_index_container';
import HomeShowContainer from './home_show/home_show_container';


const App = () => (
  <div>
    <header className="header-container">
      <NavBar />
    </header>

    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
    <div className="main-content">
    
        <UserRoute  exact path='/user/edit' component={UserEditFormContainer} />
        <Route exact path='/homes/:id' component={HomeShowContainer} />
        <Route exact path='/' component={HomesIndexContainer} />

    </div>
  </div>
);
// <GreetingContainer/>
export default App;

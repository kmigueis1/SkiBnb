import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Route} from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, UserRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar';
import UserEditFormContainer from './user_edit/user_edit_form_container';



const App = () => (
  <div>
    <header className="header-container">
      <NavBar />
    </header>

    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
    <UserRoute path='/user/edit' component={UserEditFormContainer} />
  </div>
);
// <GreetingContainer/>

export default App;

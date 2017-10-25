import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Route} from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar';


const App = () => (
  <div>
    <header>
      <NavBar />
      <GreetingContainer/>
    </header>

    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
  </div>
);

export default App;

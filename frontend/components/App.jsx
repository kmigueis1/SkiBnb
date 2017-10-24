import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Route} from 'react-router-dom';
// import SessionFormContainer from './session/session_form_container';
// import { AuthRoute } from '../util/route_util';
const App = () => (
  <div>
    <header>
      <h1>Ski BnB</h1>
      <GreetingContainer/>
    </header>

  </div>
);

// <Route path='/login' component={SessionFormContainer} />
// <Route path='/signup' component={SessionFormContainer} />
export default App;

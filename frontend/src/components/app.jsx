import React from 'react';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionForm from './session/sessionForm';
import Splash from './splash';


const App = () => (
  <div className='app'>
    <Switch>
      <Route exact path='/signup' component={SessionForm} />
      <Route exact path='/login' component={SessionForm} />
      <Route exact path='/' component={Splash} />
    </Switch>
  </div>
);

export default App;
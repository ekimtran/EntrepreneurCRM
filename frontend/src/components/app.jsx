import React from 'react';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginForm from './session/login';
import SignupForm from './session/signup';
import Splash from './splash';


const App = () => (
    <div className="app">

        <Switch>
            <Route exact path="/signup" component={SignupForm}/>
            <Route exact path="/login" component={LoginForm}/>
            <Route exact path='/' component={Splash}/>
        </Switch>
    </div>
);

export default App;
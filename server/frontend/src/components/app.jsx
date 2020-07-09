import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import LoginContainer from './session/login_container';
import LoginForm from './session/login';


const App = () => (
    <div className="app">
        {/* <Switch>
            <Route exact path='/login' component={LoginContainer}/>
        </Switch> */}
        <LoginForm />
    </div>
);

export default App;
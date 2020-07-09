import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginContainer from './session/login_container';


const App = () => (
    <div className="app">
        {/* <Switch>
            <Route exact path='/login' component={LoginContainer}/>
        </Switch> */}
        <LoginContainer />
    </div>
);

export default App;
import React from 'react';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginForm from './session/login';
import SignupForm from './session/signup';
import Splash from './splash';
import NavigationBar from './session/navigation';
import ModalContainer from './modal/modal';
import '../stylesheets/app.css';

const App = () => (
    <div className="app">
        <ModalContainer />
        <NavigationBar />
        <Switch>
            <Route exact path="/signup" component={SignupForm}/>
            <Route exact path="/login" component={LoginForm}/>
            <Route exact path='/' component={Splash}/>
        </Switch>
    </div>
);

export default App;
// first basic setup

import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import SplashPage from './splash/splash_page';
import LoginForm from './session/login_form';

const App = () => (
    <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/login" component={LoginForm} />
    </Switch>
);

export default App;
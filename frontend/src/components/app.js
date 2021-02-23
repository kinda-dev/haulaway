// first basic setup

import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch, Route } from 'react-router-dom'

import SplashPage from './splash/splash_page'
import SignupFormContainer from '../components/session/signup_form_container'
import LoginFormContainer from '../components/session/login_form_container'
import UserShow from './usershow/user_show'

const App = () => (
  <Switch>
    <Route exact path="/" component={SplashPage} />
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
    <Route exact path='/user' component={UserShow} />
  </Switch>
)
//Route path='/user' should be changed to path='/user/:userId' and 
//component should be {usershow}

export default App
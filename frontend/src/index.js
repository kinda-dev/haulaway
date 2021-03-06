import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import jwt_decode from 'jwt-decode'
import { setAuthToken } from './util/session_api_util'
import { createStore } from 'redux'

//testing
import { signup, login, logout } from './actions/session_actions'
import * as userutil from './util/session_api_util';
import {fetchUser, fetchUsers} from './actions/user_actions'
import {fetchJob, fetchJobs, fetchUserJobs} from './actions/job_actions'
import { fetchAllReviews, fetchReview } from './util/review_api_util'

document.addEventListener('DOMContentLoaded', () => {
  let store

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken)
    const decodedUser = jwt_decode(localStorage.jwtToken)
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
    }

    store = configureStore(preloadedState)

    const currentTime = Date.now() / 1000

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout())
      window.location.href = '/login'
    }
  } else {
    store = configureStore({})
  }
  const root = document.getElementById('root')

  ReactDOM.render(<Root store={store} />, root)

  //testing
  window.getState = store.getState
  window.dispatch = store.dispatch
  window.login = login
  window.signup = signup
  window.logout = logout
  window.userutil = userutil
  window.fetchUsers = fetchUsers
  window.fetchUser = fetchUser
  window.fetchJob = fetchJob
  window.fetchJobs = fetchJobs

  window.fetchAllReviews = fetchAllReviews
  window.fetchReview = fetchReview
  window.fetchUserJobs = fetchUserJobs
})

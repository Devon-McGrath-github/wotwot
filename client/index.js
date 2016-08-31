import React from 'react'
import thunk from 'redux-thunk'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import { toggleRSVP } from './actions/rsvpActions'
import { listenToAuth } from './actions/authAction'
import { deleteActivity } from './actions/deleteActivityAction'
import { uploadTask } from './storageInit'

import appReducer from './reducers/combineReducers'

import Landing from './containers/LandingContainer'
import EventList from './containers/EventListContainer'
import CreateActivity from './containers/CreateActivityContainer'
import EventDetails from './containers/EventDetailsContainer'
import Auth from './containers/AuthContainer'
import App from './containers/AppContainer'
import SignUp from './containers/SignUpContainer'

import {getActivities} from './actions/getAllActivitiesAction'

let store = createStore(
  appReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

// initial load of data while landing page is displayed
store.dispatch(getActivities())

const history = syncHistoryWithStore(hashHistory, store)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path='event-list' component={EventList}/>
          <Route path='event-details/:id' component={EventDetails} />
          <Route path='new-event' component={CreateActivity} />
          <Route path='auth' component={Auth} />
          <Route path='sign-up' component={SignUp} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
  store.dispatch(listenToAuth())
})

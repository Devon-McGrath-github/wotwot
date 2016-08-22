import React from 'react'
import thunk from 'redux-thunk'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import { toggleRSVP } from './actions/rsvpActions'
import { listenToAuth } from './actions/authAction'
import { deletePersonality } from './actions/deletePersonalityAction'
import { uploadTask } from './storageInit'

import appReducer from './reducers/combineReducers'

import Landing from './containers/LandingContainer'
import PersonalityList from './containers/PersonalityListContainer'
import CreatePersonality from './containers/CreatePersonalityContainer'
import PersonalityDetails from './containers/PersonalityDetailsContainer'
import Auth from './containers/AuthContainer'
import App from './containers/AppContainer'
import SignUp from './containers/SignUpContainer'

import {getPersonalities} from './actions/getAllPersonalitiesAction'

let store = createStore(
  appReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

// initial load of data while landing page is displayed
store.dispatch(getPersonalities())

const history = syncHistoryWithStore(hashHistory, store)

document.addPersonalityListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Landing} />
          <Route path='personality-list' component={PersonalityList}/>
          <Route path='personality-details/:id' component={PersonalityDetails} />
          <Route path='new-personality' component={CreatePersonality} />
          <Route path='auth' component={Auth} />
          <Route path='sign-up' component={SignUp} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
  store.dispatch(listenToAuth())
})

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import activities from './getAllActivitesReducer'
import auth from './authReducer'
import imageUpload from './imageUploadReducer'

const reducers = {
  routing: routerReducer,
  form: formReducer,
  activities: activities,
  auth: auth,
  imageUpload: imageUpload
}

const appReducer = combineReducers(reducers)

export default appReducer

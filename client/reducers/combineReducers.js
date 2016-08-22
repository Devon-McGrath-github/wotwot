import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import personalities from './getAllPersonalitiesReducer'
import auth from './authReducer'
import imageUpload from './imageUploadReducer'

const reducers = {
  routing: routerReducer,
  form: formReducer,
  personalities: personalities,
  auth: auth,
  imageUpload: imageUpload
}

const appReducer = combineReducers(reducers)

export default appReducer

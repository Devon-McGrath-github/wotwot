import R from 'ramda'

import rsvpReducer from './rsvpReducer'
import { DELETE_ACTIVITY } from '../actions/deleteActivityAction'
import { ADD_RSVP, CANCEL_RSVP } from '../actions/rsvpActions'
import { RECEIVE_ACTIVITIES } from '../actions/getAllActivitiesAction'

const reducer = (state = {} , action) => {
  switch (action.type) {
    case ADD_RSVP:
      return state.map((activity) => {
        if (activity.activityId === action.activityId) {
          let attendees = rsvpReducer(activity.attendeeIds, action)
          activity.attendeeIds = attendees
        }
        return activity;

      })

    case CANCEL_RSVP:
      console.log('CANCEL_RSVP in getAllActivitiesReducer')
      // need to add client side state update. Will add instant
      return state

    case RECEIVE_ACTIVITIES:
      return action.activities;

    case DELETE_ACTIVITY:
      return state.filter((activity) => {
        if (activity.activityId === action.activityId) {
          if (action.currentUserId === action.activityCreatorId) {
            return false
          }
        }
        return true

      })
    default:
      return state;
  }
}

export default reducer

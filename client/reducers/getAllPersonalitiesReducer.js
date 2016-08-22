import R from 'ramda'

import rsvpReducer from './rsvpReducer'
import { DELETE_PERSONALITY } from '../actions/deletePersonalityAction'
import { ADD_RSVP, CANCEL_RSVP } from '../actions/rsvpActions'
import { RECEIVE_PERSONALITIES } from '../actions/getAllPersonalitiesAction'

const reducer = (state = {} , action) => {
  switch (action.type) {
    case ADD_RSVP:
      return state.map((personality) => {
        if (personality.personalityId === action.personalityId) {
          let attendees = rsvpReducer(personality.attendeeIds, action)
          personality.attendeeIds = attendees
        }
        return personality;

      })

    case CANCEL_RSVP:
      console.log('CANCEL_RSVP in getAllPersonalitiesReducer')
      // need to add client side state update. Will add instant
      return state

    case RECEIVE_PERSONALITIES:
      return action.personalities;

    case DELETE_PERSONALITY:
      return state.filter((personality) => {
        if (personality.personalityId === action.personalityId) {
          if (action.currentUserId === action.personalityCreatorId) {
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

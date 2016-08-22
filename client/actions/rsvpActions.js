import { getPersonalities } from './getAllPersonalitiesAction'
import { addAttendeeIdToDB, removeAttendeeId } from '../firebaseInit'
import hasRSVPed from '../utilities/hasRSVPed'

export const ADD_RSVP = 'ADD_RSVP'
export const CANCEL_RSVP = 'CANCEL_RSVP'

// TODO: reduce duplication of arguments
const addAttendeeRequest = (attendeeId, personalityId, attendeeIds) => {
  return (dispatch) => {
    dispatch({
      type: ADD_RSVP,
      attendeeId: attendeeId,
      personalityId: personalityId,
      attendeeIds: attendeeIds
    })
    addAttendeeIdToDB({attendeeId, personalityId, attendeeIds})
      .then((result) => {
        dispatch(getPersonalities())
      })
  }
}

const removeAttendeeRequest = (attendeeId, personalityId, attendeeIds) => {
  return (dispatch) => {
    dispatch({
      type: CANCEL_RSVP,
      attendeeId: attendeeId,
      personalityId: personalityId,
      attendeeIds: attendeeIds
    })
    removeAttendeeId({attendeeId, personalityId, attendeeIds})
      .then((result) => {
        dispatch(getPersonalities())
      })
  }
}

export const toggleRSVP = (attendeeId, personalityId, attendeeIds) => {

  if (hasRSVPed(attendeeIds, attendeeId)) {
    return removeAttendeeRequest(attendeeId, personalityId, attendeeIds)
  } else {
    return addAttendeeRequest(attendeeId, personalityId, attendeeIds)
  }
}

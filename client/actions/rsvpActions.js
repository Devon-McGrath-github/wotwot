import { getActivities } from './getAllActivitiesAction'
import { addAttendeeIdToDB, removeAttendeeId } from '../firebaseInit'
import hasRSVPed from '../utilities/hasRSVPed'

export const ADD_RSVP = 'ADD_RSVP'
export const CANCEL_RSVP = 'CANCEL_RSVP'

// TODO: reduce duplication of arguments
const addAttendeeRequest = (attendeeId, activityId, attendeeIds) => {
  return (dispatch) => {
    dispatch({
      type: ADD_RSVP,
      attendeeId: attendeeId,
      activityId: activityId,
      attendeeIds: attendeeIds
    })
    addAttendeeIdToDB({attendeeId, activityId, attendeeIds})
      .then((result) => {
        dispatch(getActivities())
      })
  }
}

const removeAttendeeRequest = (attendeeId, activityId, attendeeIds) => {
  return (dispatch) => {
    dispatch({
      type: CANCEL_RSVP,
      attendeeId: attendeeId,
      activityId: activityId,
      attendeeIds: attendeeIds
    })
    removeAttendeeId({attendeeId, activityId, attendeeIds})
      .then((result) => {
        dispatch(getActivities())
      })
  }
}

export const toggleRSVP = (attendeeId, activityId, attendeeIds) => {

  if (hasRSVPed(attendeeIds, attendeeId)) {
    return removeAttendeeRequest(attendeeId, activityId, attendeeIds)
  } else {
    return addAttendeeRequest(attendeeId, activityId, attendeeIds)
  }
}

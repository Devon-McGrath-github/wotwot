import { getActivitiesFromDB } from '../firebaseInit'

export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES'

const receiveActivities = (activities) => {
  return {
    type: RECEIVE_ACTIVITIES,
    activities: activities
  }
}

export const getActivities = () => {
  return (dispatch) => {
    getActivitiesFromDB((activities) => {
      dispatch(receiveActivities(activities))
    })
  }
}

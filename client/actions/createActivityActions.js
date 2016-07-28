import { writeNewActivityToDB } from '../firebaseInit'
import { getActivities } from './getAllActivitiesAction'
import R from 'ramda'

export const CREATE_ACTIVITY = 'CREATE_ACTIVITY'

export const createActivity = (payload) => {
  var activity = R.map((prop) => {
    return prop ? prop : ''
  }, payload)
  return (dispatch) => {
    writeNewActivityToDB(activity)
      .then(() => {
        dispatch(getActivities())
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

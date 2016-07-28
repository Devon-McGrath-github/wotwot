import { getActivities } from './getAllActivitiesAction'
import { deleteActivityFromDB } from '../firebaseInit'

export const DELETE_ACTIVITY = 'DELETE_ACTIVITY'

export const deleteActivity = (currentUserId, activityCreatorId, activityId) => {
  return {
    type: DELETE_ACTIVITY,
    currentUserId: currentUserId,
    activityCreatorId: activityCreatorId,
    activityId: activityId
  }
}

export const deleteActivityRequest = (currentUserId, activityCreatorId, activityId) => {
  return (dispatch) => {
    if (currentUserId === activityCreatorId) {
      dispatch(deleteActivity(currentUserId, activityCreatorId, activityId))
      // change deleteActivityFromDB add an if statement so its
      deleteActivityFromDB({currentUserId, activityCreatorId, activityId})
        .then((result) => {
          dispatch(getActivities())
        })
    }
  }
}

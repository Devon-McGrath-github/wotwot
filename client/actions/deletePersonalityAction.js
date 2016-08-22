import { getPersonalities } from './getAllPersonalitiesAction'
import { deletePersonalityFromDB } from '../firebaseInit'

export const DELETE_PERSONALITY = 'DELETE_PERSONALITY'

export const deletePersonality = (currentUserId, personalityCreatorId, personalityId) => {
  return {
    type: DELETE_PERSONALITY,
    currentUserId: currentUserId,
    personalityCreatorId: personalityCreatorId,
    personalityId: personalityId
  }
}

export const deletePersonalityRequest = (currentUserId, personalityCreatorId, personalityId) => {
  return (dispatch) => {
    if (currentUserId === personalityCreatorId) {
      dispatch(deletePersonality(currentUserId, personalityCreatorId, personalityId))
      // change deletePersonalityFromDB add an if statement so its
      deletePersonalityFromDB({currentUserId, personalityCreatorId, personalityId})
        .then((result) => {
          dispatch(getPersonalities())
        })
    }
  }
}

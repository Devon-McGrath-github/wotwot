import { writeNewPersonalityToDB } from '../firebaseInit'
import { getPersonalities } from './getAllPersonalitiesAction'
import R from 'ramda'

export const CREATE_PERSONALITY = 'CREATE_PERSONALITY'

export const createPersonality = (payload) => {
  var personality = R.map((prop) => {
    return prop ? prop : ''
  }, payload)
  return (dispatch) => {
    writeNewPersonalityToDB(personality)
      .then(() => {
        dispatch(getPersonalities())
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

import { getAllPersonalitiesFromDB } from '../firebaseInit'

export const RECEIVE_PERSONALITIES = 'RECEIVE_PERSONALITIES'

const receivePersonalities = (personalities) => {
  return {
    type: RECEIVE_PERSONALITIES,
    personalities: personalities
  }
}

export const getPersonalities = () => {
  return (dispatch) => {
    getPersonalitiesFromDB((personalities) => {
      dispatch(receivePersonalities(personalities))
    })
  }
}

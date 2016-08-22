import firebase from 'firebase'
import R from 'ramda'

import { db, auth } from './dbInit'
import getAttendeeKey from './utilities/getAttendeeKey'

export const getPersonalitiesFromDB = (callback) => {
  db.ref('personalities/').on('value', (snapshot) => {
    callback(R.values(snapshot.val()))
  })
}

export const writeNewPersonalityToDB = (payload) => {
  const newPersonalityKey = firebase.database().ref().child('personalities/').push().key
  const newPersonality = {
    title: payload.title,
    subtitle: payload.subtitle,
    description: payload.description,
    activityStart: payload.activityStart,
    activityEnd: payload.activityEnd,
    formattedAddress: payload.formattedAddress,
    numberRequired: payload.numberRequired,
    tasks: payload.tasks,
    personalityId: newPersonalityKey,
    personalityCreatorId: payload.uid,
    images: payload.images,
    attendeeIds: payload.attendeeIds
  }
  const updates = {};
  updates['personalities/' + newPersonalityKey] = newPersonality;
  return firebase.database().ref().update(updates)
}

export const deletePersonalityFromDB = (personality) => {
  return firebase
    .database()
    .ref(`personalities/${personality.personalityId}`)
    .remove()
}

export const addAttendeeIdToDB = (personality) => {
  return  firebase
    .database()
    .ref(`personalities/${personality.personalityId}`)
    .child('attendeeIds')
    .push(personality.attendeeId)
}

export const removeAttendeeId = (personality) => {
  const attendeeKey = getAttendeeKey(personality)
  return firebase
    .database()
    .ref(`personalities/${personality.personalityId}/attendeeIds/${attendeeKey}`)
    .remove()
}

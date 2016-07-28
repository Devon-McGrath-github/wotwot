import firebase from 'firebase'
import R from 'ramda'

import { db, auth } from './dbInit'
import getAttendeeKey from './utilities/getAttendeeKey'


export const getActivitiesFromDB = (callback) => {
  db.ref('activities/').on('value', (snapshot) => {
    callback(R.values(snapshot.val()))
  })
}


export const writeNewActivityToDB = (payload) => {
  const newActivityKey = firebase.database().ref().child('activities/').push().key
  const newActivity = {
    title: payload.title,
    subtitle: payload.subtitle,
    description: payload.description,
    activityStart: payload.activityStart,
    activityEnd: payload.activityEnd,
    formattedAddress: payload.formattedAddress,
    numberRequired: payload.numberRequired,
    tasks: payload.tasks,
    activityId: newActivityKey,
    activityCreatorId: payload.uid,
    images: payload.images,
    attendeeIds: payload.attendeeIds
  }
  const updates = {};
  updates['activities/' + newActivityKey] = newActivity;
  return firebase.database().ref().update(updates)
}

export const deleteActivityFromDB = (activity) => {
  return firebase
    .database()
    .ref(`activities/${activity.activityId}`)
    .remove()
}

export const addAttendeeIdToDB = (activity) => {
  return  firebase
    .database()
    .ref(`activities/${activity.activityId}`)
    .child('attendeeIds')
    .push(activity.attendeeId)
}

export const removeAttendeeId = (activity) => {
  const attendeeKey = getAttendeeKey(activity)
  return firebase
    .database()
    .ref(`activities/${activity.activityId}/attendeeIds/${attendeeKey}`)
    .remove()
}

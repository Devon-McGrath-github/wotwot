import { connect } from 'react-redux'
import R from 'ramda'

import EventDetails from '../components/EventDetails'
import { toggleRSVP } from '../actions/rsvpActions'
import { deleteActivityRequest } from '../actions/deleteActivityAction'
import hasRSVPed from '../utilities/hasRSVPed'

const mapStateToProps = (state, ownProps) => {
  if (!state.activities.length) {
    return {
      auth: state.auth,
      activity: null,
      length: 0
    }
  }
  const auth = state.auth
  const activities = state.activities
  const selectedActivity = R.values(activities).filter((activity) => {
      return activity.activityId == ownProps.params.id
    })[0]

  return {
    auth: auth,
    activity: selectedActivity,
    length: selectedActivity ? R.values(selectedActivity.attendeeIds).length : 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRSVP: (attendeeId, activityId, attendeeIds) => dispatch(toggleRSVP(attendeeId, activityId, attendeeIds)),
    deleteActivity: (currentUserId, activityCreatorId, activityId) => dispatch(deleteActivityRequest(currentUserId, activityCreatorId, activityId)),
    hasRSVPed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)

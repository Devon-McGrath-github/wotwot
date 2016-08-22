import { connect } from 'react-redux'
import R from 'ramda'

import PersonalityDetails from '../components/PersonalityDetails'
import { toggleRSVP } from '../actions/rsvpActions'
import { deletePersonalityRequest } from '../actions/deletePersonalityAction'
import hasRSVPed from '../utilities/hasRSVPed'

const mapStateToProps = (state, ownProps) => {
  if (!state.personalities.length) {
    return {
      auth: state.auth,
      personality: null,
      length: 0
    }
  }
  const auth = state.auth
  const personalities = state.personalities
  const selectedpersonality = R.values(personalities).filter((personality) => {
      return personality.personalityId == ownProps.params.id
    })[0]

  return {
    auth: auth,
    personality: selectedPersonality,
    length: selectedPersonality ? R.values(selectedPersonality.attendeeIds).length : 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRSVP: (attendeeId, personalityId, attendeeIds) => dispatch(toggleRSVP(attendeeId, personalityId, attendeeIds)),
    deletePersonality: (currentUserId, personalityCreatorId, personalityId) => dispatch(deletePersonalityRequest(currentUserId, personalityCreatorId, personalityId)),
    hasRSVPed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalityDetails)

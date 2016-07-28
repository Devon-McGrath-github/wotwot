import R from 'ramda'

import * as actions from '../actions/rsvpActions'
import hasRSVPed from '../utilities/hasRSVPed'

export default (state = {}, action) => {
  let attendeeId = action.attendeeId
  if (hasRSVPed(state, attendeeId)) {
    return R.pickBy((val) => {
      return val !== attendeeId
    }, state)
  } else {
    return R.merge(state, {'temp': attendeeId})
  }
}

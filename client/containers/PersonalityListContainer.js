import { connect } from 'react-redux'
import moment from 'moment'

import PersonalityList from '../components/PersonalityList'
import { getPersonalities } from '../actions/getAllPersonalitiesAction'

const mapStateToProps = (state, ownProps) => {
  const dateFormat = "DD/MM/YYYY"
  if(state.personalities.length){
    let personalitiesArray = state.personalities
    let reversePersonalities = personalitiesArray.sort(function(a, b) {
      let ad = +moment(a.activityStart, dateFormat)
      let bd = +moment(b.activityStart, dateFormat)
      return ad > bd ? 1 : ad < bd ? -1 : 0;
    });
    return {
      personalities: reversePersonalities
    }
  }
  return {
    personalities: state.personalities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalityList)

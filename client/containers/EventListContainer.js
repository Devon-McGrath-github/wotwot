import { connect } from 'react-redux'
import moment from 'moment'

import EventList from '../components/EventList'
import { getActivities } from '../actions/getAllActivitiesAction'

const mapStateToProps = (state, ownProps) => {
  const dateFormat = "DD/MM/YYYY"
  if(state.activities.length){
    let activitiesArray = state.activities
    let reverseActivities = activitiesArray.sort(function(a, b) {
      let ad = +moment(a.activityStart, dateFormat)
      let bd = +moment(b.activityStart, dateFormat)
      return ad > bd ? 1 : ad < bd ? -1 : 0;
    });
    return {
      activities: reverseActivities
    }
  }
  return {
    activities: state.activities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)

import { connect } from 'react-redux'

import Nav from '../components/Nav'
import { getActivities } from '../actions/getAllActivitiesAction'
import { logoutUser } from '../actions/authAction'

const mapStateToProps = (state) => {
  return {
      auth: state.auth
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    getActivities: () => {
      dispatch(getActivities())
    },
      logoutUser: () => {
        dispatch(logoutUser())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

import { connect } from 'react-redux'
import Landing from '../components/Landing'
import { getActivities } from '../actions/getAllActivitiesAction'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getActivities: () => {
      dispatch(getActivities())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)

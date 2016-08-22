import { connect } from 'react-redux'

import Nav from '../components/Nav'
import { getPersonalities } from '../actions/getAllPersonalitiesAction'
import { logoutUser } from '../actions/authAction'

const mapStateToProps = (state) => {
  return {
      auth: state.auth
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    getPersonalities: () => {
      dispatch(getPersonalities())
    },
      logoutUser: () => {
        dispatch(logoutUser())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

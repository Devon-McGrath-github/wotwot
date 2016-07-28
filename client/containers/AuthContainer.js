import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Auth from '../components/Auth'
import { signInWithGoogle, signInWithEmail, signUp, logoutUser } from '../actions/authAction'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    },
    signInWithGoogle: () => {
      dispatch(signInWithGoogle())
    },
    signInWithEmail: (email, password) => {
      dispatch(signInWithEmail(email, password))
    },
    signUp: (email, password) => {
      dispatch(signUp(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

import { connect } from 'react-redux'

import SignUp from '../components/SignUp'
import { signUp } from '../actions/authAction'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (email, password) => {
      dispatch(signUp(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

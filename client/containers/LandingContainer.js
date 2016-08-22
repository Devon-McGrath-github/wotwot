import { connect } from 'react-redux'
import Landing from '../components/Landing'
import { getPersonalities } from '../actions/getAllPersonalitiesAction'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPersonalities: () => {
      dispatch(getPersonalities())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)

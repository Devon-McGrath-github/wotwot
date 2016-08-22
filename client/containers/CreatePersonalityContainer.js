import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import moment from 'moment'

import CreatePersonality from '../components/CreatePersonality'

import { createPersonality } from '../actions/createPersonalityActions'
import { uploadImageRequest } from '../actions/uploadImagesActions'

const mapStateToProps = (state) => {
  return {
     initialValues: {uid: state.auth.uid, attendeeIds: [0], images: "https://firebasestorage.googleapis.com/v0/b/marak-d99b3.appspot.com/o/images%2Fstock_activity_image.jpg?alt=media&token=aae693db-5d25-44fe-bcf4-40e208451af0"},
     imageUpload: state.imageUpload
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const a = 0
  return {
    onSubmit: (payload) => {
      dispatch(createPersonality(payload))
    },
    uploadImageRequest: (url) => {
      dispatch(uploadImageRequest(url))
    },
    updateDate: (date) => {
      dispatch({type: 'redux-form/CHANGE', field: 'activityStart', value: date, touch: true, form: 'createPersonalityForm'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePersonality)

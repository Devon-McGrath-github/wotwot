import { uploadImages } from '../storageInit'
export const IMAGE_UPLOAD_PROGRESS = 'IMAGE_UPLOAD_PROGRESS'
export const IMAGE_UPLOAD_SUCCESS = 'IMAGE_UPLOAD_SUCCESS'
export const IMAGE_UPLOAD_ERROR = 'IMAGE_UPLOAD_ERROR'

export const uploadImageRequest = (targetFile) => {
  return (dispatch) => {
    dispatch(imageUploadInProgress())
    uploadImages(targetFile, (url) => {
      dispatch({ type: 'redux-form/BLUR', field: "images", value: url, touch: true, form: 'createActivityForm'})
      dispatch(imageUploadSuccess())
    })
  }
}

// export const getActivities = () => {
//   return (dispatch) => {
//     getActivitiesFromDB((activities) => {
//       dispatch(receiveActivities(activities))
//     })
//   }
// }



export const imageUploadInProgress = () => {
  return {
    type: IMAGE_UPLOAD_PROGRESS
  }
}

export const imageUploadSuccess = () => {
  return {
    type: IMAGE_UPLOAD_SUCCESS
  }
}

export const imageUploadError = () => {
  return {
    type: IMAGE_UPLOAD_ERROR
  }
}

import * as actions from '../actions/uploadImagesActions'

const reducer = (state = '', action) => {
  switch (action.type) {
    case actions.IMAGE_UPLOAD_PROGRESS:
      return 'in progress'
    case actions.IMAGE_UPLOAD_SUCCESS:
      return 'success'
    default:
      return state
  }
  return state
}

export default reducer

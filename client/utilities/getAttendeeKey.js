export default (activity) => {
  const ids = activity.attendeeIds
  let attendeeKey = null
  Object.keys(ids).forEach((key) => {
    if(ids[key] === activity.attendeeId) {
      attendeeKey = key
    }
  })
  return attendeeKey

  // TODO: throw a attendee not found error
}

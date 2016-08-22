export default (personality) => {
  const ids = personality.attendeeIds
  let attendeeKey = null
  Object.keys(ids).forEach((key) => {
    if(ids[key] === personality.attendeeId) {
      attendeeKey = key
    }
  })
  return attendeeKey

  // TODO: throw a attendee not found error
}

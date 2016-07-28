export default (attendeeIds, attendeeId) => {
  // attendeeIds is an object
  let found = false
  Object.keys(attendeeIds).forEach((key) => {
    found = found || attendeeIds[key] === attendeeId
  })
  return found
}

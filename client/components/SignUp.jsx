
import React from 'react'

export default (props) => {
    let email = null
    let password = null
    let username = null
  return (
  <div>
      <h4>Sign Up</h4>
      <form onSubmit={(e)=> {
              e.preventDefault()
              props.signUp(email.value, password.value)
          }}>
          <input type="email" name="email" placeholder="email" ref={(input) => email = input }></input>
          <input type="password" name="password" placeholder="password" ref={(input) => password = input }></input>
          <input type="submit" value="Sign Up" />
      </form>
  </div>
)
}

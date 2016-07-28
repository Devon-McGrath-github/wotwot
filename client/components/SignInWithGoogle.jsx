import React from 'react'

export default (props) => {
    let email = null
    let password = null
  return (
    <div>
      <form onSubmit={(e)=> {
        e.preventDefault()
        props.signInWithGoogle()
      }}>
        <input type="submit" value="Sign In With Google" />
      </form>
    </div>
  )
}

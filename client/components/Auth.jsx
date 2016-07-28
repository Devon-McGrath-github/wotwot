import React from 'react'
import { connect } from 'react-redux'
// import { openAuth, logoutUser } from '../actions/auth'
import C from '../constants/authConstants'

import SignInWithGoogle from './SignInWithGoogle'
import SignInWithEmail from './SignInWithEmail'
import { firebaseStart } from '../dbInit.js'
import SignUp from './SignUp'

export default React.createClass({
    componentDidMount: function(){
        firebaseStart()
    },
    render: function() {
        return (
            <div>
                <div id='firebaseui-auth-container'></div>
            </div>
        )
    }
})

 /*let email = null
    let password = null

  switch (props.auth.status) {
    case C.AUTH_LOGGED_IN: return (
      <div>
        <span>Logged in as {props.auth.username}.</span>
        <button onClick={props.logoutUser}>Log out</button>
      </div>
    )
    case C.AUTH_AWAITING_RESPONSE: return (
      <div>
        <button disabled>authenticating...</button>
      </div>
    )
    case C.AUTH_ERROR: return (
        <div>
          <h4>{props.auth.errorCode}</h4>
          <h4>{props.auth.errorMessage}</h4>
        </div>

    )
    default: return (
      <div>

          {!props.auth.uid && <SignInWithGoogle signInWithGoogle={props.signInWithGoogle} />}
          {!props.auth.uid && <SignInWithEmail signInWithEmail={props.signInWithEmail} />}
          {!props.auth.uid && <SignUp signUp={props.signUp} />}
      </div>
    )
  }
}*/

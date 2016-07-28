import React from 'react'
import { connect } from 'react-redux'
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

import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export default (props) => {
  const signedIn = props.auth && props.auth.uid

  return (
    <div>
        <div className="four wide column">
          <div className="ui vertical fluid tabular menu">
            <a className="item">
              <Link to='/'>
                <p>WotWot</p>
              </Link>
            </a>
            <a className="item">
              <Link to="event-list" onClick={() => props.getActivities()}>
                <p>Personalities</p>
              </Link>
            </a>
            <a className="item">
              {signedIn ?
                <Link to="new-event">
                  <p>Create Personality</p>
                </Link> :
                <a href="/login.html"><p>Create Personality</p></a>
              }
            </a>
            <a className="item">
              {signedIn ? <button>Welcome: {props.auth.username}</button> : ''}
              {signedIn ?
                <button onClick={props.logoutUser}>Logout</button> :
                <a href="/login.html">Sign In | Sign up</a>}
            </a>
          </div>
        </div>
        <div class="twelve wide stretched column">
         <div class="ui segment">
           <p>in nav testerino</p>
         </div>
       </div>
    </div>
  )
}

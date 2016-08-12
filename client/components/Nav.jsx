import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export default (props) => {
  const signedIn = props.auth && props.auth.uid

  return (
    <div>
      <div className="ui grid">
        <div className="four wide column">
          <div className="ui vertical fluid tabular menu">
            <a className="item active">
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
        <div className="twelve wide stretched column">
          <div class="ui segment">
            <p>This is an stretched grid column. This segment will always match the tab height</p>
          </div>
        </div>
      </div>
    </div>
  )
}

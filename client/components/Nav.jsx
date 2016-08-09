import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export default (props) => {
  const signedIn = props.auth && props.auth.uid

  return (
    <div>
      <div class="four wide column">
        <div className="ui vertical fluid tabular menu hero-nav">
          <a class="active item">
            <Link to='/' className="active item">
              <p>WotWot</p>
            </Link>
          </a>
          <a class="item">
            <Link to="event-list" className="item" onClick={() => props.getActivities()}>
              <p>Event List</p>
            </Link>
          </a>
          <a class="item">
            {signedIn ?
              <Link to="new-event" className="item">
                <p>Create Event</p>
              </Link> :
              <a href="/login.html" className="item"><p>Create Event</p></a>
            }
          </a>
          <a class="item">
            {signedIn ? <button className="ui item">Welcome: {props.auth.username}</button> : ''}
            {signedIn ?
              <button className="ui item" onClick={props.logoutUser}>Logout</button> :
              <a href="/login.html" className="ui item">Sign In | Sign up</a>}
          </a>
        </div>
      </div>
    </div>
  )
}

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
            <a className="active item">
              <Link to='/' className="active item">
                <p>WotWot</p>
              </Link>
            </a>
            <a className="item">
              <Link to="event-list" className="item" onClick={() => props.getActivities()}>
                <p>Event List</p>
              </Link>
            </a>
            <a className="item">
              {signedIn ?
                <Link to="new-event" className="item">
                  <p>Create Event</p>
                </Link> :
                <a href="/login.html" className="item"><p>Create Event</p></a>
              }
            </a>
            <a className="item">
              {signedIn ? <button className="ui item">Welcome: {props.auth.username}</button> : ''}
              {signedIn ?
                <button className="ui item" onClick={props.logoutUser}>Logout</button> :
                <a href="/login.html" className="ui item">Sign In | Sign up</a>}
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

import React from 'react'
import { Link } from 'react-router'
import Auth from '../containers/AuthContainer'
import Nav from '../containers/NavContainer'

export default (props) => {
  let signedIn = props.auth.uid
  return (
  <div className="hero-image">
    <Nav />
    <div class="twelve wide stretched column">
      <div class="ui segment">
        <div className="hero-container">
          <div className="hero-header">
            <h1 className="hero-h1">WotWot</h1>
          </div>

          <div className="hero-description">
            <h3 className="hero-h3"><span className="hero-desc-text">The Personality Hub</span></h3>
          </div>

          <div className="hero-button">
            <Link to='event-list'>
              <button className="ui inverted black button">
                <span className="events-list-text">Events Near Me</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

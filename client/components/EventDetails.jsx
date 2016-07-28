import React from 'react'
import { Link } from 'react-router'
import R from 'ramda'
import Nav from '../containers/NavContainer'
import ReactDisqusThread from 'react-disqus-thread'

import hasRSVPed from '../utilities/hasRSVPed'

export default React.createClass({
  propTypes: {
    activity: React.PropTypes.object
  },

  render () {
    if (!this.props.activity) {
      return (
        <div>Loading...</div>
      )
    }

    let activity = this.props.activity
    let auth = this.props.auth

    let activityId = activity ? activity.activityId : 0
    let currentUserId = auth.uid
    let attendeeIds = activity.attendeeIds
    let activityCreatorId = activity.activityCreatorId
    let showDelete = currentUserId === activityCreatorId

    let bgActivityImage = activity.images
    let bgBannerStyle = {
      backgroundImage: 'url(' + bgActivityImage + ')',
      backgroundColor: 'transparent',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }

    if (activity) {
      return (
        <div>
          <Nav />

          <div className="banner-event-details" style={bgBannerStyle}>
            <div className="banner-title">{activity.title}</div>
            <h2 className="subtitle-header">{activity.subtitle}</h2>
          </div>

          <div className="ui hidden divider"></div>

          <div className="ui container boom">
            <div className="ui stackable four column grid">
              {/* TITLE HEADER BOX */}
              <div id="rsvp" className="event-deets four wide column">
                <h1>Event Details</h1>
                <div className="content">
                    <p><b>Location: </b>{activity.formattedAddress}</p>
                    <p><b>Tasks: </b>{activity.tasks}</p>
                    <p><b>Date: </b>{activity.activityStart}</p>
                    <p><b>Time: </b>{activity.activityEnd}</p>
                    <p><b>Number people attending: </b>
                    <br/>{this.props.length - 1 } / {activity.numberRequired} </p>
                    <div className="ui hidden divider">
                      <button className="ui yellow button" onClick={() => { this.props.toggleRSVP(currentUserId, activityId, attendeeIds)} }>
                      { this.props.hasRSVPed(attendeeIds, currentUserId) ? 'Cancel RSVP' : 'RSVP' }
                      </button>
                    </div>
                  </div>
              </div>

              <div id="descript" className="twelve wide column">
                <div className="desc-box twelve wide column">
                  <h1 className="content description-event">Description </h1><p> {activity.description}</p>
                </div>
              </div>

                {/* EVENT DETAILS BOX */}


                {/* EVENT Description BOX */}

                <div className="disqus-box sixteen wide column">
                  <div id="disqus">
                  <ReactDisqusThread
                    shortname='unityhivekarma'
                    identifier={activity.activityId}
                    title={activity.title}
                    url="https://test-9eee4.firebaseapp.com/" />
                  </div>
                </div>

                <div className="sixteen wide column">

                {showDelete ? <Link to='event-list'><button className="ui red button delete-button" onClick={() => { this.props.deleteActivity(currentUserId, activityCreatorId, activityId)} }>Delete Event</button></Link> : null}

                </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container">
          <h1>Loading...</h1>
        </div>
      )
    }
  }
})

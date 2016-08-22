import React from 'react'
import { Link } from 'react-router'
import R from 'ramda'
import Nav from '../containers/NavContainer'
import ReactDisqusThread from 'react-disqus-thread'

import hasRSVPed from '../utilities/hasRSVPed'

export default React.createClass({
  propTypes: {
    personality: React.PropTypes.object
  },

  render () {
    if (!this.props.personality) {
      return (
        <div>Loading...</div>
      )
    }

    let personality = this.props.personality
    let auth = this.props.auth

    let personalityId = personality ? personality.personalityId : 0
    let currentUserId = auth.uid
    let attendeeIds = personality.attendeeIds
    let personalityCreatorId = personality.personalityCreatorId
    let showDelete = currentUserId === personalityCreatorId

    let bgpersonalityImage = personality.images
    let bgBannerStyle = {
      backgroundImage: 'url(' + bgPersonalityImage + ')',
      backgroundColor: 'transparent',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }

    if (personality) {
      return (
        <div>
          <Nav />

          <div className="banner-Personality-details" style={bgBannerStyle}>
            <div className="banner-title">{personality.title}</div>
            <h2 className="subtitle-header">{personality.subtitle}</h2>
          </div>

          <div className="ui hidden divider"></div>

          <div className="ui container boom">
            <div className="ui stackable four column grid">
              {/* TITLE HEADER BOX */}
              <div id="rsvp" className="Personality-deets four wide column">
                <h1>Personality Details</h1>
                <div className="content">
                    <p><b>Location: </b>{personality.formattedAddress}</p>
                    <p><b>Tasks: </b>{personality.tasks}</p>
                    <p><b>Date: </b>{personality.activityStart}</p>
                    <p><b>Time: </b>{personality.activityEnd}</p>
                    <p><b>Number people attending: </b>
                    <br/>{this.props.length - 1 } / {personality.numberRequired} </p>
                    <div className="ui hidden divider">
                      <button
                        className="ui yellow button"
                        onClick={() => { this.props.toggleRSVP(currentUserId, personalityId, attendeeIds)}
                      }>
                      { this.props.hasRSVPed(attendeeIds, currentUserId) ? 'Cancel RSVP' : 'RSVP' }
                      </button>
                    </div>
                </div>
              </div>

              <div id="descript" className="twelve wide column">
                <div className="desc-box twelve wide column">
                  <h1 className="content description-Personality">Description </h1><p> {personality.description}</p>
                </div>
              </div>

              {/* Personality DETAILS BOX */}


              {/* Personality Description BOX */}

              <div className="disqus-box sixteen wide column">
                <div id="disqus">
                  <ReactDisqusThread
                    shortname='wotwot'
                    identifier={personality.personalityId}
                    title={personality.title}
                    url={"https://wotwot-4b943.firebaseio.com" + personality.personalityId} />
                </div>
              </div>

              <div className="sixteen wide column">
                {showDelete ?
                  <Link to='Personality-list'>
                    <button
                      className="ui red button delete-button"
                      onClick={() => { this.props.deletePersonality(currentUserId, personalityCreatorId, personalityId)}
                    }>Delete Personality</button>
                  </Link> : null}
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

import React from 'react'
import { Link } from 'react-router'
import Nav from '../containers/NavContainer'
import Landing from '../containers/LandingContainer'

export default React.createClass({
  render () {
    return (
      <div id="root-div">
        <div className="ui grid">
          <Nav />
          <Landing />
        </div>
        <div className="twelve wide stretched column">
          <div class="ui segment">
            {this.props.children}
          </div>
        </div>
      </div>
    )
   }
 })

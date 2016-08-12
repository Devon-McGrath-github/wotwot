import React from 'react'
import { Link } from 'react-router'
import Nav from '../containers/NavContainer'

export default React.createClass({
  render () {
    return (
      <div id="root-div">
        <Nav />
          <div className="twelve wide stretched column">
            <div class="ui segment">
              {this.props.children}
            </div>
          </div>
      </div>
    )
   }
 })

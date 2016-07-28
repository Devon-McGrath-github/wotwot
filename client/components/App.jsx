import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div id="root-div">
         {this.props.children}
       </div>
       )
   }
 })

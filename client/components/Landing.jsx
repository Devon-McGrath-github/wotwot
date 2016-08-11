import React from 'react'
import { Link } from 'react-router'
import Auth from '../containers/AuthContainer'
import Nav from '../containers/NavContainer'

export default (props) => {
  let signedIn = props.auth.uid
  return (
  <div className="hero-image">
    <Nav />
  </div>
  )
}

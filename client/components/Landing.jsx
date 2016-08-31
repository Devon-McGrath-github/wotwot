import React from 'react'
import { Link } from 'react-router'
import Auth from '../containers/AuthContainer'

export default (props) => {
  let signedIn = props.auth.uid
  return (
    <div class="twelve wide stretched column">
     <div class="ui segment">
       <p>teste</p>
     </div>
   </div>
  )
}

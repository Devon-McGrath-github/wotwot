import React from 'react'
import R from 'ramda'
import { Link } from 'react-router'

export default (props) => {
  const personalities = R.values(props.personalities)
  return (
    <div>
      <div className="banner-Personality-list">
        <div className="banner-title">Personalities</div>
      </div>
      <div className="divider"></div>

      <div className="ui container">
        {personalities.map(function (personality) {
          return (
            <Link to={`/Personality-details/${personality.personalityId}`}><a>
            <div className="ui gaps items" key={personality.id}>
            <div key={personality.id} className="item">
              <div className="image">
                <img src={personality.images}/>
              </div>
              <div className="Personality-list-content content">
                <div className="header"><p>{personality.title}</p></div>
                <div className="meta">
                  <span className="price"><p>{personality.personalityStart}</p></span>
                  <span className="price"><p>{personality.personalityEnd}</p></span>
                  <span className="stay"><p>{personality.subtitle}</p></span>
                  <div className="description"><p>{personality.description}</p></div>
                </div>
              </div>
            </div>
            </div>
            </a></Link>
          )})}
      </div>
    </div>
  )
}

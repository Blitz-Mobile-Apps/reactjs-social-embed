import React, { Component } from 'react'

import { Youtube } from 'reactjs-social-embed'

export default class App extends Component {
  render () {
    return (
      <div>
          <Youtube 
            parentClass="parent-container" 
            iframeClass="video-container" 
            id="nN6VR92V70M" 
          />
      </div>
    )
  }
}

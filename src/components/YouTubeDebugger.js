import React, { Component } from 'react'

// Code YouTubeDebugger Component Here
class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } }
    };
  }

  onClick = (event) => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
       bitrate: 12
     }),
    })
  }

  handleClick = (event) => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: {
          resolution: '720p'
        }
      })
    })
  }

  render() {
    return(
      <div>
      <button className='bitrate' onClick={this.onClick}>Update settings.bitrate to 12</button>
      <button className='resolution' onClick={this.handleClick}>Update resolution to 720p</button>
      </div>
    )
  }
}

export default YouTubeDebugger

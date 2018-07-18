// Code YouTubeDebugger Component Here

import React, { Component } from 'react'

class YouTubeDebugger extends Component {
  constructor() {
  	super();

  	this.state = {
  		errors: [],
  		user: null,
  		settings: {
  			bitrate: 8,
  			video: {
  				resolution: '1080p',
  			}
  		}
  	}
  }

  render() {
  	return(
  	 <div>
  	  <button className="bitrate" onClick={(event) => this.setState({settings: Object.assign({}, this.state.settings, {
  	  	bitrate: 12,
  	  })
  	})}></button>
  	  <button className="resolution" onClick={ 
  	  	event => this.setState(
  	  		 {settings: Object.assign(
  	  			{}, this.state.settings, {video: { resolution: "720p"}}
  	  		)}
  	  	)
  	  }></button>
  	 </div>
  	)
  }
}

export default YouTubeDebugger;
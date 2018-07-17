// Code YouTubeDebugger Component Here

import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor(props){
      super(props);

      this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      };
    }

    onBitrateClick = () => {
        this.setState({
          settings: {
            ...this.state.settings,
              bitrate: 12
          }
        })

    }

    onResolutionClick = () => {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          video: Object.assign({}, this.state.settings.video, {
            resolution: '720p'
          })
        }),
      })

    }

    render() {
      return(
        <div>
          <button className="bitrate" onClick={this.onBitrateClick}>bitrate Click me.</button>

          <button className="resolution" onClick={this.onResolutionClick}>resolutionClick me.</button>

        </div>
      )

    }

}

export default YouTubeDebugger;

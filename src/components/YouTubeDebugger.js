// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{
    constructor(){
      super();
      this.state = {
        errors: [],
        user: null,
       settings: {
            bitrate: 8,
              video: {
                  resolution: '1080p'
   }
 }
}
}

    handleBitrate = () => {
      this.setState(prevState => {
       //  console.log(Object.assign({},prevState.settings,{
       //   bitrate: 12
       // }))
return {
       settings: Object.assign({},prevState.settings,{
        bitrate: 12
      })
    }
    },() => console.log(this.state));
    }


    handleResolution = () => {
      this.setState(prevState => {
      return {
        settings: {
          ...prevState.settings,
          video: {resolution: '720p'}
        }
      }
    },() => console.log(this.state))
    }



render(){

  return(
    <div>
    <button className = "bitrate" onClick={this.handleBitrate}> click to set bitrate </button>
    <button className = "resolution" onClick={this.handleResolution}> click to set resolution</button>
    </div>
  )
}


}


export default YouTubeDebugger;

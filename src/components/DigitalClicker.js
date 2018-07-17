// Code DigitalClicker Component Here

import React, { Component } from 'react';

class DigitalClicker extends Component {
  constructor(props){
    super(props);

    this.state = { timesClicked: 0 };
  }

  onClick = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.onClick}>{this.state.timesClicked}</button>
      </div>

    );
  }
}

export default DigitalClicker;

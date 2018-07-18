// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    };
  }

  upTimeOneClickThanks = () => {
    let newTime = this.state.timesClicked + 1;
    this.setState(
      {
        timesClicked: newTime
      },
      console.log(newTime)
    );
  };
  render() {
    return (
      <button onClick={this.upTimeOneClickThanks}>
        {this.state.timesClicked}
      </button>
    );
  }
}

export default DigitalClicker;

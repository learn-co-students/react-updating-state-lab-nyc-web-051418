import React, { Component } from 'react'

// Code DigitalClicker Component Here
class DigitalClicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    };
  }

  onClick = (event) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return(
      <button onClick={this.onClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker

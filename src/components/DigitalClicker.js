// Code DigitalClicker Component Here
import React, { Component} from 'react'

class DigitalClicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0,
    }
  };

  handleClick = () => {
    let counter = this.state.timesClicked + 1
    this.setState({
      timesClicked: counter,
    })
  }

  render() {

    return (
      <div>
        <button id="button" onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;

// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{
  constructor(){
    super();
    this.state = {
        timesClicked: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      // console.log(prevState)
      // debugger;

      timesClicked: ++prevState.timesClicked
    }))
  }



render(){
// console.log(this.state.timesClicked)
return(<button onClick={this.handleClick}>{this.state.timesClicked}</button>)
}


}

export default DigitalClicker;

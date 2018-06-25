import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    const message =
      this.state.secondsLeft === 0
        ? "Boom!"
        : `${this.state.secondsLeft} seconds left before I go boom!`;
    return <div>{message}</div>;
  }
  // render() {
  //   if (this.state.secondsLeft === 0) {
  //     return <div>Boom!<div>
  //   }
  //   else {
  //     return <div>{this.state.secondsLeft} seconds left before I go boom!</div>;
  //   }
  // }
}

export default Bomb;

import React, { Component } from "react";

export default class ChildComponnet extends Component {
  constructor(props) {
    super(props);

    console.log("Child Props: 1", props);

    this.state = {
      newMessage: "Bye Buddy",
    };
  }

  changeMessageHandel = () => {
    console.log(
      "Child Props: 2",
      this.props.messageHandel(this.state.newMessage)
    );
  };
  render() {
    return (
      <>
        <div>childComponnet</div>
        <button onClick={this.changeMessageHandel}>Click Me!</button>
      </>
    );
  }
}

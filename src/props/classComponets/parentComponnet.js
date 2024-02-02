import React, { Component } from "react";
import ChildComponnet from "./childComponnet";

export default class ParentComponnet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hey Buddy",
    };
  }
  clickMsgPropsHandel = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>ParentComponnet Class</div>
        Your Message:- {this.state.message}
        <br />
        <br />
        <br />
        <ChildComponnet
          abcProps={this.state.message}
          messageHandel={this.clickMsgPropsHandel}
        />
      </div>
    );
  }
}

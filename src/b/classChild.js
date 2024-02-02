import React, { Component } from "react";

export class ClassChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: "Janu Draling",
    };
  }

  newChangeName = () => {
    this.props.changeNameHandelProps(this.state.newName);
  };
  render() {
    return (
      <>
        <div>ClassChild</div>
        <button onClick={this.newChangeName}>Change</button>
      </>
    );
  }
}

export default ClassChild;

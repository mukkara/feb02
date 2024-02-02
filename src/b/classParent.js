import React, { Component } from "react";
import ClassChild from "./classChild";

export class ClassParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Janu",
    };
  }
  changeNameHandel = () => {
    this.setState({ name: "Hey Jnau Darling" });
  };
  render() {
    return (
      <>
        <div>ClassParent {this.state.name}</div>
        <ClassChild changeNameHandelProps={this.changeNameHandel} />
      </>
    );
  }
}

export default ClassParent;

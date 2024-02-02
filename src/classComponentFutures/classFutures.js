import React, { Component } from "react";

export default class ClassFutures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      message: "Hey Dude",
    };
  }
  //   ComponentDidMount,
  //   componentDidUpdate,
  //   componentWillUnmount,
  //   shouldComponentUpdate
  componentDidMount() {
    console.log("Comonnet Is Mounted!");
    this.intervalId = setInterval(() => {
      this.setState((preValue) => ({
        message: preValue.message,
      }));
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Comonnet Is didUpdate!");
  }

  componentWillUnmount() {
    console.log("Comonnet Is willUnmount!");
    clearInterval(this.intervalId);
  }

  //   shouldComponentUpdate() {}

  increaseNoData = () => {
    this.setState((preValue) => ({
      number: preValue.number + 1,
    }));
  };

  render() {
    console.log("Render Start");

    return (
      <>
        {console.log("Return Start ")}
        <div>Lifecycle Methods</div>
        <p>{this.state.message}</p>
        <p>Count NO : {this.state.number}</p>
        <button onClick={this.increaseNoData}>Click Me</button>
      </>
    );
  }
}

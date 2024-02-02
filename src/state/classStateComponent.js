import React from "react";

export default class ClassStateComonnet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "Hi Bro1",
      last: "Bye Bro",
      age: 30,
    };
  }

  updateAge = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };
  render() {
    return (
      <>
        <div>Hi State In Class Component {this.state.age}</div>
        <button onClick={this.updateAge}>Change Age</button>
      </>
    );
  }
}

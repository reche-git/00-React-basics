import { Component } from "react";

export default class Father extends Component {
  state = {
    counter: 0,
  };

  incrementCounter = (e) => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Communication between Components</h2>
        <h3>
          Father Counter Component: <b>{this.state.counter}</b>
        </h3>
        {/*COMUNICATION 1 = From Father to Son -> message pass*/}
        <Son1 message="Message to Son 1 from papa" />
        <hr />
        {/*COMUNICATION 2 = From son to father -> state change*/}
        <Son2 incrementCounter={this.incrementCounter} />
      </>
    );
  }
}

function Son1(props) {
  return (
    <>
      <h3>Son 1 Component</h3>
      <h4>{props.message}</h4>
    </>
  );
}

function Son2(props) {
  return (
    <>
      <h3>Son 2 Component</h3>
      <p>
        Push the button to change the state of my father's counter
      </p>
      <button onClick={props.incrementCounter}>+</button>
    </>
  );
}

import { Component } from "react";

function StateSon(props) {
  return (
    <div>
      <hr />
      <h3>This counter was passed by the father component to his son:</h3>
      <p style={{fontSize: "20px"}}>{props.counterSon}</p>
    </div>
  );
}

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter:
        "1 and 2, next three and four... Sorry, I don't have logic yet...",
    };

    // setInterval(() => {
    //   this.setState({
    //       contador: this.state.contador + 1
    //   });
    // }, 1000)
  }

  render() {
    return (
      <div>
        <h2>The State</h2>
        <h3>Counter:</h3>
        <p style={{fontSize: "20px"}}>{this.state.counter}</p>
        <StateSon counterSon={this.state.counter} />
      </div>
    );
  }
}

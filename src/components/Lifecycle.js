import { Component } from "react";

class Clock extends Component {
  componentWillUnmount() {
    console.log(4, "The component has been erased from the DOM");
  }

  render() {
    return <h3>{this.props.hour}</h3>;
  }
}

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log(
      1,
      "The component has been initialized, but it's not in the DOM yet"
    );

    this.state = {
      hour: new Date().toLocaleTimeString(),
    };

    this.temporizador = null;
  }

  componentDidMount() {
    console.log(
      2,
      "The component is in the DOM (you can't see it because of the conditional render)"
    );
  }

  componentDidUpdate() {
    console.log(3, "The state/props of the component has changed");
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hour: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <h2>Lifecycle of Class Components</h2>
        <p>
          The console will show you the 4 states of the lifecycle of this
          component, wich are:
        </p>
        <p>1° Initialization</p>
        <p>2° Mounting</p>
        <p>3° Updation</p>
        <p> 4° Unmounting</p>
        {this.state.visible && <Clock hour={this.state.hour} />}
        <button onClick={this.iniciar}>Start</button>
        <button onClick={this.detener}>Stop</button>
      </>
    );
  }
}

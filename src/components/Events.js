import { Component } from "react";

export class EventsES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add(e) {
    console.log("Sumando");
    console.log(this);

    this.setState({
      counter: this.state.counter + 1,
    });
  }

  subtract(e) {
    console.log("Restando");
    console.log(this);

    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Events Section!</h2>
        <p>You need to know the roots, first ES6 and then ES7!</p>
        <hr />
        <h3>Class Components Events in ES6</h3>
        <h4>{this.state.counter}</h4>
        <nav>
          <button onClick={this.subtract}>-</button>
          <button onClick={this.add}>+</button>
        </nav>
      </div>
    );
  }
}

//Properties Initializer
export class EventsES7 extends Component {
  state = {
    counter: 0,
  };

  //Arrow Function
  add = (e) => {
    // console.log("Sumando");
    // console.log(this);
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  subtract = (e) => {
    // console.log("Restando");
    // console.log(this);
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h3>Class Components Events in ES7</h3>
        <h4>{this.state.counter}</h4>
        <nav>
          <button onClick={this.subtract}>-</button>
          <button onClick={this.add}>+</button>
        </nav>
      </div>
    );
  }
}

//Native Events, Sintetics y Personalized

// function Boton(props) {
//   return <button onClick={props.myOnClick}>Button made Component</button>;
// }

// const Boton = (props) => {
//   return <button onClick={props.myOnClick}>Button made Component</button>;
// }

const Button = ({ myOnClick }) => {
  return <button onClick={myOnClick}>Button Component</button>;
};

export class MoreAboutEvents extends Component {
  handleClick = (e, message) => {
    // console.log(e);
    // console.log(e.nativeEvent);
    // console.log(e.target);
    // console.log(e.nativeEvent.target);
    // console.log(mensaje);
    alert(message);
  };

  render() {
    return (
      <div>
        <h3>More About Events</h3>
        <button
          onClick={(e) =>
            this.handleClick(
              e,
              "Hello, you're passing a parameter from an event. How are you?"
            )
          }
        >
          Say hi!
        </button>

        {/*Evento Personalizado*/}

        {/* COMMON ERROR:
        <Boton
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        /> 
      */}
        <Button
          myOnClick={(e) =>
            this.handleClick(
              e,
              "I'm actually a component and I'm passing an event from a son component"
            )
          }
        />
      </div>
    );
  }
}

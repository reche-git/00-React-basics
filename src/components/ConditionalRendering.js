import { Component } from "react";

function Login() {
  return (
    <div>
      <h3>Login</h3>
    </div>
  );
}

function Logout() {
  return (
    <div>
      <h3>Logout</h3>
    </div>
  );
}

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Change the value between "true" and "false" to see the
      //changes in the conditional render
      session: true,
    };
  }
  render() {
    return (
      <div>
        <h2>Conditional Rendering</h2>
        <p>
          The condition is due by the manual operation of the state.
          <br />
          You can't be able to see that here, but in the source code.
        </p>
        {this.state.session ? <Login /> : <Logout />}
      </div>
    );
  }
}

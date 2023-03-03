import { useState } from "react";

export default function CounterHooks(props) {
  const [counter, setCounter] = useState(0);
  //   console.log(useState());

  const add = () => setCounter(counter + 1);
  const subtract = () => setCounter(counter - 1);

  return (
    <>
      <h2>Hooks - useState</h2>
      <p>
        Brought here in february of 2019 because Class Components are... you
        know... meh...
      </p>
      <p>
        React Hooks are simple JavaScript functions that we can use to isolate
        the reusable part from a functional component. Hooks can be stateful and
        can manage side-effects.
      </p>
      <h3>
        {props.titulo} {props.titulo2} with useState: <b>{counter}</b>
      </h3>
      <nav>
        <button onClick={subtract}>-</button>
        <button onClick={add}>+</button>
        {counter > 0 && <p>Going up!</p>}
        {counter < 0 && <p>Going down!</p>}
      </nav>
    </>
  );
}

//Pasar propiedades por defecto:q
CounterHooks.defaultProps = {
  titulo: "Clicks",
};

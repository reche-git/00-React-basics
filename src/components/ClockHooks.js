import { useEffect, useState } from "react";

function Clock({ hour }) {
  return <h3>{hour}</h3>;
}

export default function ClockHooks() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }
    return () => {
      // console.log("Fase de Desmontaje");
      clearInterval(temporizador);
    };
  }, [visible]);

  return (
    <>
      <h2>Clock with Hooks</h2>
      <p>
        Every time you press "Start", a state variable called "visible" will turn
        true, allowing you to see the clock and start it! (the opposite with the "Stop" button)
      </p>
      {visible && <Clock hour={hour} />}
      <button onClick={() => setVisible(true)}>Start</button>
      <button onClick={() => setVisible(false)}>Stop</button>
    </>
  );
}

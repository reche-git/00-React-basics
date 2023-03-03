import "./App.css";
import Component from "./components/Component";
import Properties from "./components/Properties";
import State from "./components/State";
import ConditionalRendering from "./components/ConditionalRendering";
import ElementRendering from "./components/ElementRendering";
import { EventsES6, EventsES7, MoreAboutEvents } from "./components/Events";
import ComponentsCommunication from "./components/ComponentsCommunication";
import Lifecycle from "./components/Lifecycle";
import AjaxApis from "./components/AjaxApis";
import CounterHooks from "./components/CounterHooks";
import Scrollhooks from "./components/ScrollHooks";
import ClockHooks from "./components/ClockHooks";
import AjaxHooks from "./components/AjaxHooks";
import CustomHooks from "./components/CustomHooks";
import References from "./components/References";
import Forms from "./components/Forms";
import Styles from "./components/Styles";
import StyledComponents from "./components/StyledComponents";
import MyModal from "./components/MyModal";
import { useEffect, useState } from "react";

function App() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  let message = "I'm actually a const inside a JSX tag";
  let seasons = ["Spring", "Summer", "Fall", "Winter"];

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {isDisplayed && <MyModal />}
        <section className="App-header">
          <label htmlFor="name">Click me to focus the input</label>
          <input type="text" id="name" />
          <hr />
          <h3>{message}</h3>
          <hr />
          <p>
            Writte JS code easily inside a tag thanks to the use of JSX instead
            of html:
            <br />2 + 1 = {2 + 1}
          </p>
          <hr />
          <p>
            Even in React, the basics of JavaScript are needed in order to be a
            good developer, do you remember the .map() method?
          </p>
          <p>
            Let's use the map method to this array:
            <br />
            'let seasons = ["Spring", "Summer", "Fall", "Winter"]'
          </p>
          <p>And we get:</p>
          <ul>
            {seasons.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
          <a
            className="App-link"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            JavaScript Documentation
          </a>
          <hr />
        </section>
        <section>
          <Component msg="Hi! I'm a Functional Component expressed from a prop" />
          <hr />
          <Properties
            string="String"
            number={19}
            boolean={true}
            array={[1, 2, 3]}
            object={{ name: "Alan", email: "alanaxelreche@hotmail.com" }}
            funcion={(num) => num * num}
            ReactElement={<i>This is a React Element</i>}
            ReactComponent={
              <Component msg="Hi! I'm a Functional Component expressed as a prop, and I'm being reused!" />
            }
          />
          <hr />
          <State />
          <hr />
          <ConditionalRendering />
          <hr />
          <ElementRendering />
          <hr />
          <EventsES6 />
          <hr />
          <EventsES7 />
          <hr />
          <MoreAboutEvents />
          <hr />
          <ComponentsCommunication />
          <hr />
          <Lifecycle />
          <hr />
          <AjaxApis />
          <hr />
          <CounterHooks titulo2="and more Clicks" />
          <hr />
          <Scrollhooks />
          <hr />
          <ClockHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <CustomHooks />
          <hr />
          <References />
          <hr />
          <Forms />
          <hr />
          <Styles />
          <hr />
          <StyledComponents />
          <br />
        </section>
      </header>
    </div>
  );
}

export default App;

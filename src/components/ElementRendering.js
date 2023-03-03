import { Component } from "react";
import data from "../helpers/data.json";

function ListElement(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class ElementRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Spring", "Summer", "Fall", "Winter"],
    };
  }
  render() {
    // console.log(data)
    return (
      <div>
        <h2>Render of Elements</h2>
        <p>
          In this section we rendered the state of the Component (the year
          seasons) and the content from another component (the frameworks)
        </p>
        <h4>Year Seasons</h4>
        <ol>
          {this.state.seasons.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ol>
        <h4>Frameworks Frontend JavaScript</h4>
        <ul>
          {data.frameworks.map((el) => (
            <ListElement key={el.id} el={el} />
          ))}
        </ul>
        <p>
          Puting all the code here would defeat the porpuse of me making you
          check out the repository CLICK HERE!
        </p>
      </div>
    );
  }
}

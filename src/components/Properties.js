import React from "react";
import PropTypes from "prop-types";

export default function Properties(props) {
  return (
    <div>
      <h2>{props.ByDefect}</h2>
      <ul>
        <li>This is a: {props.string}</li>
        <li>This is a: {props.number}</li>
        <li>This boolean value: {props.boolean ? "true" : "false"}</li>
        <li>
          This is an array with a "join()" method: {props.array.join(", ")}
        </li>
        <li>
          This is an edited object:{" "}
          {props.object.name + " - " + props.object.email}
        </li>
        <li>
          This is the array of numbers mapped and passed as properties to a
          function: {props.array.map(props.funcion).join(", ")}
        </li>
        <li>{props.ReactElement}</li>
        <li>{props.ReactComponent}</li>
      </ul>
    </div>
  );
}

Properties.defaultProps = {
  ByDefect: "The Props",
};

Properties.propTypes = {
  number: PropTypes.number.isRequired,
};

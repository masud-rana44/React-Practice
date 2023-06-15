import React, { useState } from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  render() {
    return (
      <h1 className="heading" tabIndex={0}>
        <span className="text">
          {new Date().toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById("root"));

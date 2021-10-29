import React, { Component } from "react";
class Spinner extends Component {
  render() {
    return (
      <div id="wheel">
        <canvas id="canvas" width="1000" height="600"></canvas>
      </div>
    );
  }
}

export default Spinner;

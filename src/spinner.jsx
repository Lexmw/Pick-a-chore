import React, { Component } from "react";


class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 4,
      description: "",
      chorelist: ["clean dishes","Wash Clothes","clean car", "Clean Garage"]
    };
  }

  render() {
    return (
      <div id="wheel">
        <h2>The wheel</h2>
        <h2>The Chores</h2>
          <div id="chore-list"><ul></ul></div>
        <div>
          <ul>
            {this.props.todo.map((todo) => {
              return <li>{todo.description}</li>;
            })}
          </ul>
        </div>
        <canvas id="canvas" width="1000" height="600"></canvas>
      </div>
    );
  }
}

export default Spinner;

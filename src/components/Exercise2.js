import React, { Component } from "react";

class Exercise2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      fruit: "",
    };
  }

  fruitHandler = (event) => {
    this.setState({ fruit: event.target.value }, () =>
      console.log(`${this.state.name} chose the ${this.state.fruit}`)
    );
  };

  nameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          name="name"
          value={this.state.name}
          onChange={this.nameHandler}
          id="name-input"
        />
        <select
          id="select-input"
          value={this.state.fruit}
          onChange={this.fruitHandler}
        >
          <option hidden>Select Fruit...</option>
          <option value="banana">banana</option>
          <option value="grape">grape</option>
          <option value="malon">malon</option>
          <option value="Watermelon">Watermelon</option>
        </select>
      </div>
    );
  }
}

export default Exercise2;

import React, { Component } from "react";

class Exercise1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
    };
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  changeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  aleetInfo = () => {
    alert(`Come in ${this.state.name} you're ${this.state.age}`);
  };

  //   handleInputChange = e => {
  //     const value = e.target.value;
  //     const inputName = e.target.name;
  //     this.setState({
  //       [inputName]: value,
  //     });
  //   };

  render() {
    return (
      <div>
        <input
          id="name-input"
          value={this.state.name}
          onChange={this.changeName}
        />
        <input
          id="age-input"
          value={this.state.age}
          onChange={this.changeAge}
        />
        <button onClick={this.aleetInfo}>Go to Bar</button>
      </div>
    );
  }
}

export default Exercise1;

import React, { Component } from "react";
//import { print } from "./helpers";
import Menu from "./components/Menu";
import Data from "./data.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      userName: "Hadi",
    };
    this.change = (e) => {
      e.preventDefault();
      this.setState({
        userName: "Ali",
      });
    };
  }

  render() {
    return (
      <React.Fragment>
        <Menu
          propsName="notofficial
"
          info={Data}
        />
        {/* <form onSubmit={this.change}>
          <h1>Hi I am {this.state.userName}</h1>
          <input type="submit" />
        </form> */}
      </React.Fragment>
    );
  }
}

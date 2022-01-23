import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';
import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

class App extends React.Component {
  constructor(props) {
@@ -14,19 +14,15 @@ class App extends React.Component {
    };
  }

  handleClick = (buttonName) => {
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  }
  };

  render() {
    return (
      <div className="component-app">
        <Display
          value={this.state.next || this.state.total || '0'}
        />
        <ButtonPanel
          clickHandler={this.handleClick}
        />
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;

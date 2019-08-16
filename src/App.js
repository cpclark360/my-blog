import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Section from "./components/Section";
const _ = require("underscore");

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <Nav />
        <Main />
        <Aside />
        <Section />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Section from "./components/Section";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <Nav />
        <Main />
        <Aside />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "../App.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="wrapper">
          <div className="box menu">Menu</div>
          <div className="box search">Search</div>
          <div className="box log">Log</div>
        </div>
      </nav>
    );
  }
}

export default Nav;

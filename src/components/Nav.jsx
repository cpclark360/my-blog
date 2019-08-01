import React, { Component } from "react";
import "../App.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="wrapper">
          <div className="box menu" />
          <div className="box">
            <div className="icons">icons</div>
          </div>
          <div className="box log">
            <input id="nav-search" type="search" placeholder="Search" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;

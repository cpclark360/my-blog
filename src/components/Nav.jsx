import React, { Component } from "react";
import "../App.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="wrapper">
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="box menu" />
          <div className="box">
            <div className="icons">icons</div>
          </div>
          <div className="box log">
            <input id="nav-search" type="search" placeholder="Search" />
          </div>
=======
          <div className="box menu">Menu</div>
          <div className="box search">Search</div>
          <div className="box log">Log</div>
>>>>>>> parent of b4d0d96... updated
=======
          <div className="box menu">
            <div className="icons">icons</div>
          </div>
          <div className="box search">Search</div>
          <div className="box log">Log</div>
>>>>>>> parent of 893c456... added API modules
        </div>
      </nav>
    );
  }
}

export default Nav;

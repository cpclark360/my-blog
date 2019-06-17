import React, { Component } from "react";
import "../App.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <header>
          <div className="menu">
            <span />
            <span>Just Blog it</span>
          </div>

          <div className="seach">
            <form>search todos</form>
          </div>

          <div className="log">
            <span>Log-in</span>
          </div>
        </header>
      </nav>
    );
  }
}

export default Nav;

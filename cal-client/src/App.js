import React from "react";

import Calendar from "./Calendar";
import Manager from "./Manager";
import { Router } from "@reach/router";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              My<b>Calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Router>
            <Calendar path="/" />
            <Manager path="/manage" />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;

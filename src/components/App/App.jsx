import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import AuthPage from "../AuthPage/AuthPage";
import Profile from "../Profile/Profile";

export class App extends Component {
  render() {
    return <BrowserRouter>
        <div style={{ display: "flex", boxSizing: "border-box" }}>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/profile" component={Profile} />
        </div>
      </BrowserRouter>;
  }
}

export default App;

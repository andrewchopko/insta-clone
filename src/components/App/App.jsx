import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import LoginPage from "../AuthPage/LoginPage";
import SignUpPage from "../AuthPage/SignUpPage";
import Profile from "../Profile/Profile";

export class App extends Component {
  render() {
    return <BrowserRouter>
        <div style={{ display: "flex", boxSizing: "border-box" }}>
          <Route exact path="/" component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/profile" component={Profile} />
        </div>
      </BrowserRouter>;
  }
}

export default App;

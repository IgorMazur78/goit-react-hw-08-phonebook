import React, { Component } from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import authOperation from "../redux/auth/authOperation";
import HomePage from "../Views/HomePage";
import RegistrationForm from "../Views/RegistrationForm";
import LogIn from "../Views/LogIn";
import AppBar from "./AppBar/AppBar";
import PhoneBook from "../Component/PhoneBook/PhoneBook";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import PublicRoute from "../Component/PublicRoute/PublicRoute"

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <AppBar />
        <hr />
        <Switch>
          <PrivateRoute path="/contacts" exact component = {PhoneBook}/>
          <PublicRoute path ="/" restricted = {false} exact component = {HomePage} />
          <PublicRoute path ="/register" restricted = {true} exact component = {RegistrationForm} />
          <PublicRoute path ="/login" restricted = {true} exact component = {LogIn} />
          </Switch>
      </div>
      </BrowserRouter>
      
    );
  }
}
const mapDispatchToProps = {
  onGetCurrentUser: authOperation.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

import React, { Component, Suspense, lazy } from "react";
import {BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";

import authOperation from "../redux/auth/authOperation";
import AppBar from "./AppBar/AppBar";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import PublicRoute from "../Component/PublicRoute/PublicRoute"

const HomePage = lazy(()=>import("../Views/HomePage"));
const RegistrationForm = lazy(()=>import("../Views/RegistrationForm"));
const  LogIn = lazy(()=>import("../Views/LogIn"));
const PhoneBook = lazy(()=>import("../Component/PhoneBook/PhoneBook"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <AppBar />
 
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute path="/contacts" exact component = {PhoneBook}/>
          <PublicRoute path ="/" restricted = {false} exact component = {HomePage} />
          <PublicRoute path ="/register" restricted = {true} exact component = {RegistrationForm} />
          <PublicRoute path ="/login" restricted = {true} exact component = {LogIn} />
          </Switch>
          </Suspense>
      </div>
      </BrowserRouter>
      
    );
  }
}
const mapDispatchToProps = {
  onGetCurrentUser: authOperation.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

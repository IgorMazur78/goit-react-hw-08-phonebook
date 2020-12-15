import React, { Component } from "react";
import { connect } from "react-redux";

import authOperation from "../redux/auth/authOperation";

class registrationForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handelRegistrationName = (event) => {
    event.preventDefault();
    this.setState({
      name: event.target.value,
    });
  };

  handelRegistrationEmail = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    });
  };
  handelRegistrationPassword = (event) => {
    event.preventDefault();
    this.setState({
      password: event.target.value,
    });
  };

  RegisterSubmit = (event) => {
    event.preventDefault();
    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <form onSubmit={this.RegisterSubmit}>
        <h1>Form registration</h1>
        <h2>Name</h2>
        <input
          type="text"
          name="user"
          value={name}
          onChange={this.handelRegistrationName}
          placeholder="user name"
        />
        <h2>E-mail</h2>
        <input
          type="email"
          value={email}
          name="user"
          onChange={this.handelRegistrationEmail}
          placeholder="user email"
        />
        <h2>Password</h2>
        <input
          type="password"
          value={password}
          name="user"
          onChange={this.handelRegistrationPassword}
          placeholder="user password"
        />
        <br />
        <button type="submit" className="">
          To Register
        </button>
      </form>
    );
  }
}

// const mapDispatchToProps({
//     onRegister: authOperation.register
// })

export default connect(null, {onRegister: authOperation.register})(
  registrationForm
);

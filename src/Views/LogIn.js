import React, { Component } from "react";
import { connect } from "react-redux";
import authOperation from "../redux/auth/authOperation";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handelEmailLogIn = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    });
  };
  handelpasswordLogIn = (event) => {
    event.preventDefault();
    this.setState({
      password: event.target.value,
    });
  };

  logInSubmit = (event) => {
    event.preventDefault();
    this.props.onLogIn({ ...this.state });
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <form onSubmit={this.logInSubmit}>
        <h1>Log in to the user</h1>
        <h2>E-mail</h2>
        <input
          type="email"
          value={this.state.email}
          onChange={this.handelEmailLogIn}
          placeholder="to enter e-mail"
        />
        <h2>Password</h2>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handelpasswordLogIn}
          placeholder="to enter password"
        />
        <br />
        <button type="submit">To Enter</button>
      </form>
    );
  }
}
// const mapDispatchToProps = () => ({
//   onLogIn: authOperation.logIn,
// });
export default connect(null,{onLogIn: authOperation.logIn})(LogIn);

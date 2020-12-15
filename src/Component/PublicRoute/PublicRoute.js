import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isLogIn } from "../../redux/auth/authSelector";

const PublicRoute = ({
  component: Component,
  isАuthorized,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) => {
      return isАuthorized && restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      );
    }}
  />
);

const mapStateToProps = (state) => ({
  isАuthorized: isLogIn(state),
});

export default connect(mapStateToProps)(PublicRoute);

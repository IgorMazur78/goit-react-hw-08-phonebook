import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isLogIn } from "../../redux/auth/authSelector";

const PrivateRoute = ({
  component: Component,
  isАuthorized,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) => {
      return isАuthorized ? <Component {...props} /> : <Redirect to="/" />;
    }}
  />
);

const mapStateToProps = (state) => ({
  isАuthorized: isLogIn(state),
});

export default connect(mapStateToProps)(PrivateRoute);

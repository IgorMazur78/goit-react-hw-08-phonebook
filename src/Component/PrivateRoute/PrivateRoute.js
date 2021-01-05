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
    render={(props) => 
       isАuthorized ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = (state) => ({
  isАuthorized: isLogIn(state),
});

export default connect(mapStateToProps)(PrivateRoute);

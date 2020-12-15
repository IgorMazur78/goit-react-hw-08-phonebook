import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { isLogIn } from "../redux/auth/authSelector";
import style from "../Style/navigation.module.css"

import AuthorizedNovigation from "../Views/AuthorizedNovigation";

const header = ({ isАuthorized }) => {
  return (
    <nav className={style.listNavigation}>
    <NavLink exact to="/">
          Home
        </NavLink>
    {isАuthorized && <AuthorizedNovigation />}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isАuthorized: isLogIn(state),
});

export default connect(mapStateToProps)(header);

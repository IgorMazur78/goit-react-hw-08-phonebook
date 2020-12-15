import React from "react";
import { connect } from "react-redux";
import Navigation from "../../Views/Navigation";
import UserMenu from "../Usermenu/userMenu";
import style from "../../Style/navigation.module.css";
import HomeNavigation from "../../Views/HomeNavigation";
import {isLogIn} from "../../redux/auth/authSelector"

const AppBar  = ({onLogIn}) => {
    return(
        <div className={style.header}>
        <Navigation />
        {onLogIn ? <UserMenu />:<HomeNavigation/>}
      </div>

    )
}
 const mapStateToProps = (state) => ({
    onLogIn: isLogIn(state)
 })

export default connect(mapStateToProps)(AppBar);
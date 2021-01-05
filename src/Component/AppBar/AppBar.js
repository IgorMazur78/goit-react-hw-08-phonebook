import React from "react";
import { connect } from "react-redux";
import Navigation from "../../Views/Navigation";
import UserMenu from "../Usermenu/userMenu";
// import style from "../../Style/navigation.module.css";
import HomeNavigation from "../../Views/HomeNavigation";
import { isLogIn } from "../../redux/auth/authSelector";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import style from "./appBar.module.css"





const BarNavigation = ({ onLogIn }) => {

  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar className={style.Toolbar}>
          
          {!onLogIn && <Navigation />}
          
          {onLogIn ? <UserMenu /> : <HomeNavigation />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
const mapStateToProps = (state) => ({
  onLogIn: isLogIn(state),
});

export default connect(mapStateToProps)(BarNavigation);

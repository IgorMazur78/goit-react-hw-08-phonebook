import React from "react";

import { connect } from "react-redux";
import style from "../../Style/navigation.module.css";
import AuthOperation from "../../redux/auth/authOperation";

import { getUserName } from "../../redux/auth/authSelector";


const UserMenu = ({ avatar, name, onLogOut }) => {
  return (
    <div className={style.listNavigation}>
      <img
        src={avatar}
        alt="spiderman"
        width="52"
        className={style.itemNavigation}
      />

      <span className={style.itemNavigation}>
        You are on the pages : User {name}
      </span>
      {/* className={style.itemNavigation }*/}
      <button type="button" onClick={onLogOut} className={style.itemNavigation}>
        Log Out
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: getUserName(state),
  avatar: "http://clipart-library.com/2020/il_794xN.1921617602_pb2d.jpg",
  
});

const mapDispachToProps = {
  onLogOut: AuthOperation.logOut,
};

export default connect(mapStateToProps, mapDispachToProps)(UserMenu);

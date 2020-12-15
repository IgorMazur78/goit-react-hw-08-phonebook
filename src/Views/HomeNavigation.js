import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Style/navigation.module.css";

const HomeNavigation = () => {
  return (
    <ul className={style.listNavigation}>
     
      <li className={style.itemNavigation}>
        <NavLink to="/register">Registers</NavLink>
      </li>
      <li className={style.itemNavigation}>
        <NavLink to="/login">Log in</NavLink>{" "}
      </li>
    </ul>
  );
};

export default HomeNavigation;

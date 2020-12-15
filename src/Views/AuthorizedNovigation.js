import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Style/navigation.module.css";

const AuthorizedNovigation = () => {
  return (
    <ul className={style.listNavigation}>
   
      <li className={style.itemNavigation}>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
  );
};

export default AuthorizedNovigation;

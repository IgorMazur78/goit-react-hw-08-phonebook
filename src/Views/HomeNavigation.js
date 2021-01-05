import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Toolbar, Button } from "@material-ui/core";
// import style from "../Style/navigation.module.css";

const HomeNavigation = () => {
  return (
    <div>
      <Toolbar>
        <Box mr={2}>
          <Button color="secondary" variant="contained">
            <NavLink to="/register">Registers</NavLink>
          </Button>
        </Box>

        <Button color="secondary" variant="contained">
          <NavLink to="/login">Log in</NavLink>
        </Button>
      </Toolbar>
    </div>
  );
};

export default HomeNavigation;

import React from "react";

import { NavLink } from "react-router-dom";

import { Toolbar, IconButton, Typography } from "@material-ui/core";


const Navigation = () => {
  
  return (
    <Toolbar>
      <NavLink exact to="/">
        
        <IconButton edge="start" color="secondary" aria-label="menu">
        <Typography variant="h6">Home</Typography>
        </IconButton>

        
      </NavLink>
      
    </Toolbar>
  );
};


export default Navigation;

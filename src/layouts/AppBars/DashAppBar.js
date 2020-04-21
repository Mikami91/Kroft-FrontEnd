// Dependencies
import React, { useState } from "react";
import PropTypes from "prop-types";
// @material-ui/Componentes
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
// Core Components
import CustomAppBar from "../../components/AppBar/CustomAppBar";

const DashAppBar = ({ style }) => {
  // TabPanel Swipeables Views
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // Change Desktop and Mobile display
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <CustomAppBar position="fixed" color="secondary">
      <IconButton
        edge="start"
        //className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>

      <Button color="inherit">Login</Button>
    </CustomAppBar>
  );
};

// PropTypes
DashAppBar.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default DashAppBar;

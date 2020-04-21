// Dependencies
import React from "react";
import PropTypes from "prop-types";
// @material-ui/Componentes
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const MyStyle = () => {};

const CustomAppBar = (props) => {
  const { position, variant, color, disableGutters, classes, children } = props;
  console.log(children);

  const style = MyStyle();

  return (
    <AppBar position={position} color={color} classes={classes}>
      <Toolbar>
        {children}
      </Toolbar>
    </AppBar>
  );
};

// PropTypes
CustomAppBar.defaultProps = {
  position: "fixed",
  variant: "regular",
  color: "primary",
  disableGutters: false,
  classes: null,
  children: null,
};

CustomAppBar.propTypes = {
  position: PropTypes.oneOf([
    "absolute",
    "fixed",
    "relative",
    "static",
    "sticky",
  ]),
  variant: PropTypes.oneOf([
      "regular",
      "dense"
  ]),
  color: PropTypes.oneOf([
    "default",
    "inherit",
    "primary",
    "secondary",
    "transparent",
  ]),
  disableGutters: PropTypes.bool,
  classes: PropTypes.object,
  children: PropTypes.node,
};

export default CustomAppBar;

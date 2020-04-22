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
  const { position, children } = props;

  const style = MyStyle();

  return (
    <AppBar position={position}>
      <Toolbar>
        <IconButton
          edge="start"
          //className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" /*className={classes.title}*/>News</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

// PropTypes
CustomAppBar.defaultProps = {
  position: "fixed",
  children: null,
};

CustomAppBar.propTypes = {
  position: PropTypes.oneOf([
    "absolute" | "fixed" | "relative" | "static" | "sticky",
  ]),
  children: PropTypes.element,
};

export default CustomAppBar;

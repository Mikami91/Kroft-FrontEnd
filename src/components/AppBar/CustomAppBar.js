// Dependencies
import React from "react";
import PropTypes from "prop-types";
// @material-ui/Componentes
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// Styles
import styles from '../../styles/components/appBarStyle';
const useStyles = makeStyles(styles);

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const CustomAppBar = (props) => {
  const { position, variant, color, gutters, children } = props;

  const classes = useStyles();

  return (
    <HideOnScroll {...props}>
    <AppBar position={position} color={color} className={classes.dashAppBar}>
      <Toolbar variant={variant} disableGutters={gutters} >
        {children}
      </Toolbar>
    </AppBar>
    </HideOnScroll>
  );
};

// PropTypes
CustomAppBar.defaultProps = {
  position: "fixed",
  variant: "regular",
  color: "primary",
  gutters: false,
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
  children: PropTypes.node,
};

export default CustomAppBar;

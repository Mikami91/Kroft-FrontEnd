// Dependencies
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/Componentes
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
// Styles
import styles from "../../styles/components/appBarStyle";
const useStyles = makeStyles(styles);

// Childs Components
function IconChlid(props) {
  const { index } = props;
  const classes = useStyles();
  if (index.disabled) {
    return (
      <IconButton edge={index.edge} disabled>
        <index.icon className={classes.icons} />
      </IconButton>
    );
  } else {
    return (
      <Tooltip placement="bottom" title={index.text}>
        <IconButton
          edge={index.edge}
          color={index.color}
          onClick={index.onClick}
        >
          <index.icon className={classes.icons} />
        </IconButton>
      </Tooltip>
    );
  }
}
function ButtonChlid(props) {
  const { index } = props;
  const classes = useStyles();
  return (
    <Button
      disabled={index.disabled}
      color={index.color}
      variant={index.variant}
      size={index.size}
      onClick={index.onClick}
    >
      {index.icon ? (
        <index.icon className={classes.icons} />
      ) : null}
      {index.text}
    </Button>
  );
}
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
// PropsTypes
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

// Parent Component
function CustomAppBar(props) {
  const {
    position,
    variant,
    color,
    gutters,
    drawer,
    rightButtons,
    leftButtons,
  } = props;

  const classes = useStyles();
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.dashAppBar]: drawer,
  });

  return (
    <HideOnScroll {...props}>
      <AppBar position={position} color={color} className={appBarClasses}>
        <Toolbar variant={variant} disableGutters={gutters}>
          <div className={classes.contentRight}>
            {rightButtons.map((index, key) => {
              // Icon type
              if (index.type === "icon" && typeof index.icon !== "undefined") {
                return <IconChlid key={key} index={index} />;
              }
              // Button type
              if (
                index.type === "button" &&
                typeof index.text !== "undefined"
              ) {
                return <ButtonChlid key={key} index={index} />;
              }
            })}
          </div>

          <div className={classes.contentLeft}>
            {leftButtons.map((index, key) => {
              // Icon type
              if (index.type === "icon" && typeof index.icon !== "undefined") {
                return <IconChlid key={key} index={index} />;
              }
              // Button type
              if (
                index.type === "button" &&
                typeof index.text !== "undefined"
              ) {
                return <ButtonChlid key={key} index={index} />;
              }
            })}
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

// PropTypes
CustomAppBar.defaultProps = {
  // AppBar
  position: "fixed",
  color: "primary",
  // TooolBar
  variant: "regular",
  gutters: false,
  drawer: false,
  // Buttons
  rightButtons: [],
  leftButtons: [],
};

CustomAppBar.propTypes = {
  // AppBar
  position: PropTypes.oneOf([
    "absolute",
    "fixed",
    "relative",
    "static",
    "sticky",
  ]),
  color: PropTypes.oneOf([
    "default",
    "inherit",
    "primary",
    "secondary",
    "transparent",
  ]),
  // TooolBar
  variant: PropTypes.oneOf(["regular", "dense"]),
  disableGutters: PropTypes.bool,
  drawer: PropTypes.bool,
  // Buttons
  rightButtons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["icon", "button"]),
      text: PropTypes.string,
      color: PropTypes.oneOf([
        "default",
        "inherit",
        "primary",
        "secondary",
        "transparent",
      ]),
      icon: PropTypes.object,
      edge: PropTypes.oneOf(["start", "end", false]),
      variant: PropTypes.oneOf(["text", "outlined", "contained"]),
      size: PropTypes.oneOf(["large", "small", "medium", "default"]),
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ),
  leftButtons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["icon", "button"]),
      text: PropTypes.string,
      color: PropTypes.oneOf([
        "default",
        "inherit",
        "primary",
        "secondary",
        "transparent",
      ]),
      icon: PropTypes.object,
      edge: PropTypes.oneOf(["start", "end", false]),
      variant: PropTypes.oneOf(["text", "outlined", "contained"]),
      size: PropTypes.oneOf(["large", "small", "medium", "default"]),
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ),
};

export default CustomAppBar;

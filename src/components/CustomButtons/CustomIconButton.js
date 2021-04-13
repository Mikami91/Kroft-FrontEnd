import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

// core components

import buttonStyle from "../../styles/components/buttonStyle.js";

const makeComponentStyles = makeStyles(() => ({
  ...buttonStyle
}));

function CustomIconButton(props) { 
  const {
    html,
    color,
    variant,
    round,
    text,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    Icon,
    justIcon,
    onClick,
    className,
  } = props.index;

  const classes = makeComponentStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  return (
    <Button
        variant={variant}
        color={color}
        className={btnClasses}
        size={size}
        // endIcon={<Icon className={classes.icons} />}
        onClick={onClick}
        html={html}
      >
        {text}
      </Button>
  );
};

// PropTypes
CustomIconButton.defaultProps = {
  color: "primary",
  variant: "contained",
  size: "medium",
  html: "",
  text: "Button",
  onClick: null,
  icon: {},
  simple: false,
  round: false,
  fullWidth: false,
  disabled: false,
  block: false,
  link: false,
  justIcon: false,
}

CustomIconButton.propTypes = {
  html: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.object,
  size: PropTypes.oneOf([
    "small",
    "medium",
    "large"
  ]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "transparent"
  ]),
  variant: PropTypes.oneOf([
    "text",
    "outlined",
    "contained",
  ]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string
};

export default CustomIconButton;

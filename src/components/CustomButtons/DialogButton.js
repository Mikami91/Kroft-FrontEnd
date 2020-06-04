// Dependencies
import React, { createElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// Styles
import styles from "../../styles/components/buttonStyle.js";

const useStyles = makeStyles(styles);

function DialogButton(props) {
  const { disabled, variant, color, onClick, html, text, icon } = props.index;
  const classes = useStyles();
  const btnClasses = classNames({
    [classes.dialogButton]: true,
    [classes[color]]: color && variant === "contained",
    [classes[color + "Text"]]: color && variant !== "contained",
    [classes.disabled]: disabled,
  });
  return (
    <Button
      disabled={disabled}
      variant={variant}
      //   color={color}
      className={btnClasses}
      endIcon={typeof icon !== "undefined" ? createElement(icon) : null}
      onClick={onClick}
      html={html}
    >
      {text}
    </Button>
  );
}
// PropTypes
DialogButton.defaultProps = {
  disabled: false,
  variant: "contained",
  color: "primary",
  icon: null,
  onClick: null,
  html: "",
  text: "Button",
};
DialogButton.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "transparent",
  ]),
  icon: PropTypes.object,
  onClick: PropTypes.func,
  html: PropTypes.string,
  text: PropTypes.string,
};

export default DialogButton;

// Dependencies
import React, { createElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// Styles
import styles from "../../styles/components/buttonStyle.js";

const useStyles = makeStyles(styles);

function DialogButton(props) {
  const { disabled, variant, margin, color, onClick, html, text, icon, key } = props.index;
  const classes = useStyles();
  const btnClasses = classNames({
    [classes.dialogButton]: true,
    [classes[color]]: color && variant === "contained",
    [classes[color + "Text"]]: color && variant !== "contained",
    [classes.margin]: margin,

    [classes.disabled]: disabled,
  });
  return [
    <Hidden mdUp key={key + "small"}>
      <IconButton
        aria-label={text}
        disabled={disabled}
        variant={variant}
        className={btnClasses}
        onClick={onClick}
        html={html}
      >
        {typeof icon !== "undefined" ? createElement(icon) : null}
      </IconButton>
    </Hidden>,

    <Hidden smDown key={key+ "large"}>
      <Button
        disabled={disabled}
        variant={variant}
        className={btnClasses}
        endIcon={typeof icon !== "undefined" ? createElement(icon) : null}
        onClick={onClick}
        html={html}
      >
        {text}
      </Button>
    </Hidden>,
  ];
}
// PropTypes
DialogButton.defaultProps = {
  disabled: false,
  variant: "contained",
  margin: false,
  color: "primary",
  icon: null,
  onClick: null,
  html: "",
  text: "Button",
};
DialogButton.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  margin: PropTypes.bool,
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

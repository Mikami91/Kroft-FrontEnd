import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// core components
import styles from "../../styles/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function CustomText(props) {
  const classes = useStyles();
  const {
    text,
    variant,
    color,
    align,
    autoSize,
    size,
    adjust,
    margin,
    bold,
    noWrap,
    display,
  } = props;
  const TextClasses = classNames({
    // [classes.text]: autoSize,
    [classes.adjustText]: adjust,
    [classes[size + "SizeText"]]: true,
    [classes.margin]: margin,
    [classes[color + "Text"]]: true,
    [classes.bold]: bold,
  });
  return (
    <Typography
      variant={variant}
      className={TextClasses}
      align={align}
      noWrap={noWrap}
      display={display}
    >
      {text}
    </Typography>
  );
}
// Proptypes
CustomText.defaultProps = {
  text: "",
  align: "inherit",
  autoSize: false,
  size: "default",
  adjust: false,
  margin: false,
  color: "default",
  variant: "inherit",
  bold: false,
  noWrap: false,
  display: "initial",
};
CustomText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  autoSize: PropTypes.bool,
  size: PropTypes.oneOf(["default", "medium", "large"]),
  adjust: PropTypes.bool,
  margin: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.oneOf([
    "default",
    "inherit",
    "white",
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "secondary",
  ]),
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
    "srOnly",
    "inherit",
  ]),
  noWrap: PropTypes.bool,
  display: PropTypes.oneOf(["initial", "block", "inline"]),
};

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// core components
import styles from "../../styles/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function DialogText(props) {
  const classes = useStyles();
  const { text, variant, color, autoSize, large, align, margin, bold, noWrap, display } = props.index;
  const TextClasses = classNames({
    [classes.text]: autoSize,
    [classes.largeText]: large,
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
DialogText.defaultProps = {
  text: "",
  color: "default",
  autoSize: false,
  large: false,
  align: "inherit",
  margin: false,
  variant: "inherit",
  bold: false,
  noWrap: false,
  display: "initial",
};
DialogText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  autoSize: PropTypes.bool,
  large: PropTypes.bool,
  margin: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.oneOf([
    "inherit",
    "default",
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

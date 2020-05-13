import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
// @material-ui/icons
// core components
import styles from "../../styles/components/cardPriceStyle.js";

const useStyles = makeStyles(styles);

export default function CardPrice(props) {
  const classes = useStyles();
  const { prefix, text, color } = props;
  const cardIconClasses = classNames({
    [classes.cardPrice]: true,
    [classes[color + "Color"]]: color,
  });
  return (
    <div className={cardIconClasses}>
      {/* <Typography
        component="span"
        variant="subtitle2"
        className={classes.cardPrefix}
        color="initial"
      >
        {prefix + " " }
      </Typography> */}
      <Typography
        component="span"
        variant="subtitle1"
        className={classes.cardText}
        color="initial"
      >
        <span className={classes.cardPrefix}>{prefix + " "}</span>
        {text}
      </Typography>
    </div>
  );
}
// PropTypes
CardPrice.defaultProps = {
  prefix: "",
  text: "",
  color: "primary",
}
CardPrice.propTypes = {
  prefix: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "success",
    "danger",
    "info",
    "rose"
  ]),
};
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
// @material-ui/icons
// core components
import styles from "../../styles/components/cardNameStyle.js";

const useStyles = makeStyles(styles);

export default function CardName(props) {
  const classes = useStyles();
  const { text, color } = props;
  const cardNameClasses = classNames({
    [classes.cardName]: true,
    // [classes[color + "Color"]]: color,
  });
  return (
    <div className={cardNameClasses}>
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
        {"Typography subtitle1 " + text}
      </Typography>
    </div>
  );
}
// PropTypes
CardName.defaultProps = {
  prefix: "",
  text: "",
  color: "primary",
}
CardName.propTypes = {
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
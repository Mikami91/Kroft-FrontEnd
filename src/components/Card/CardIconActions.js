import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "../../styles/components/cardIconActionsStyle.js";

const useStyles = makeStyles(styles);

export default function CardIconActions(props) {
  const classes = useStyles();
  const { align, children } = props;
  const cardIconActions = classNames({
    [classes.cardIconActions]: true,
    [classes[align]]: true,
  });
  return (
    <p className={cardIconActions}>
        {children}
    </p>
  );
}
//PropTypes
CardIconActions.defaultProps = {
    align: "right",
    children: []
}
CardIconActions.propTypes = {
   align: PropTypes.oneOf([
    "right",
    "center",
    "left"
  ]),
  children: PropTypes.node
};
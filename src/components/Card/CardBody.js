import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../styles/components/cardBodyStyle.js";

const useStyles = makeStyles(styles);

export default function CardBody(props) {
  const classes = useStyles();
  const { className, children, login, stats, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBodyLogin]: login,
    [classes.cardBodyStats]: stats,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  login: PropTypes.bool,
  stats: PropTypes.bool,
};

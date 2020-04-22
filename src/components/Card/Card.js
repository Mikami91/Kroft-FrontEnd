import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../styles/components/cardStyle.js";

const useStyles = makeStyles(styles);

export default function Card(props) {
  const classes = useStyles();
  const { className, variant, children, plain, carousel, ...rest } = props;
  const cardClasses = classNames({
    [classes.card]: variant !== null ? false : true,
    [classes[variant]]: variant !== null ? true : false,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined,
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

// PropTypes
Card.defaultProps = {
  className: "",
  variant: "",
  plain: false,
  carousel: false,
  children: [],
};

Card.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["cardLogin", "cardSide", "cardDash"]),
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  children: PropTypes.node,
};

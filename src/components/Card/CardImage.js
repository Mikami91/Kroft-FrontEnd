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

export default function CardImage(props) {
  const classes = useStyles();
  const { className, variant, plain, carousel, chart, image, imageAlt, text, textColor } = props;
  const cardClasses = classNames({
    [classes[variant]]: variant,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [classes.cardChart]: chart,
    [className]: className !== undefined,
  });
  const textClasses = classNames({
    [classes.cardText]: true,
    [classes[textColor + "Text"]]: true,
  });
  return (
    <div className={cardClasses}>
      <img className={classes.cardImage} alt={imageAlt} src={image} />
      <p className={textClasses}>{text}</p>
    </div>
  );
}

// PropTypes
CardImage.defaultProps = {
  className: "",
  variant: "card",
  plain: false,
  carousel: false,
  chart: false,
  image: "",
  imageAtl: "Image",
  text: "",
  textColor: "black",
};

CardImage.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["card", "cardLogin", "cardForm", "cardSide", "cardDash"]),
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  chart: PropTypes.bool,
  image: PropTypes.string,
  imageAtl: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.oneOf(["primary", "secondary", "warning", "success", "danger", "info", "rose", "white", "black"]),
  children: PropTypes.node,
};

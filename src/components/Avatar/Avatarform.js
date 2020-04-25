import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
// Styles
import styles from "../../styles/components/avatarFormStyle.js";

const useStyles = makeStyles(styles);

export default function AvatarForm(props) {
  const { image, title, alt, right, square } = props;
  const classes = useStyles();
  const avatarClasses = classNames({
    [classes.avatar]: true,
    [classes.right]: right,
    [classes.square]: square,
});
  return (
    <CardMedia
        className={avatarClasses}
        component="img"
        alt={alt}
        image={image}
        title={title}
    />
  );
}

// PropTypes
AvatarForm.defaultProps = {
    image: "",
    title: "",
    alt: "",
    right: false,
    square: false
};
AvatarForm.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    alt: PropTypes.string,
    right: PropTypes.bool,
    square: PropTypes.bool
};

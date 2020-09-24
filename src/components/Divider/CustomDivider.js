// Dependencies
import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// Styles
import styles from "../../styles/components/dividerStyle.js";

const useStyles = makeStyles(styles);

const CustomDivider = (props) => {
    const { text, margin, color, bold, size, align } = props;
    // Styles
    const classes = useStyles();
    const dividerClasses = classNames({
        [classes[color]]: true,
        [classes[align]]: true,
        [classes[margin]]: true,
        [classes[size]]: true,
        [classes.bold]: bold
    });

    return (
        <p className={dividerClasses}>{text}</p>
    );
}
// PropTypes
CustomDivider.defaultProps = {
    text: "",
    margin: "normal",
    size: "medium",
    color: "primary",
    align: "center",
    bold: false,
};
CustomDivider.propTypes = {
    text: PropTypes.string,
    margin: PropTypes.oneOf([
        "none",
        "dense",
        "normal",
        "middle",
    ]),
    size: PropTypes.oneOf([
        "small",
        "medium",
        "large",
    ]),
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "white",
        "gray"
    ]),
    align: PropTypes.oneOf([
        "left",
        "center",
        "right",
    ]),
    bold: PropTypes.bool,
};
export default CustomDivider;
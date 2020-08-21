// Dependencies
import React, { forwardRef, createElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// Styles
import styles from "../../styles/components/buttonStyle.js";

const useStyles = makeStyles(styles);

function DialogSubmit(props) {
    const { disabled, variant, margin, color, html, text, icon, key } = props.index;
    const classes = useStyles();
    const btnClasses = classNames({
        [classes.dialogButton]: true,
        [classes[color]]: color && variant === "contained",
        [classes[color + "Text"]]: color && variant !== "contained",
        [classes.margin]: margin,

        [classes.disabled]: disabled,
    });

    const SubmitButton = forwardRef((props, ref) => (<button {...props} form={html} type="submit" ref={ref} />));

    return (
        <Button
            key={key}
            disabled={disabled}
            variant={variant}
            className={btnClasses}
            endIcon={typeof icon !== "undefined" ? createElement(icon) : null}
            component={SubmitButton}
        >
            {text}
        </Button>
    );
}
// PropTypes
DialogSubmit.defaultProps = {
    disabled: false,
    variant: "contained",
    margin: false,
    color: "primary",
    icon: null,
    onClick: null,
    html: "",
    text: "Button",
};
DialogSubmit.propTypes = {
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(["text", "outlined", "contained"]),
    margin: PropTypes.bool,
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "white",
        "transparent",
    ]),
    icon: PropTypes.object,
    onClick: PropTypes.func,
    html: PropTypes.string,
    text: PropTypes.string,
};

export default DialogSubmit;

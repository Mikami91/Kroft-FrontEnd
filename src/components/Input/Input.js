// Dependencies
import React from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
// Styles
import styles from "../../styles/components/customInputStyle.js";

const useStyles = makeStyles(styles);

const Input = (props) => {
    const { disabled, label, margin, color, name, onChange, placeholder, required, type, value, variant } = props;
    // Styles
    const classes = useStyles();

    return (
        <TextField
            disabled={disabled}
            variant={variant}
            margin={margin}
            className={classes.labelRoot + classes.underlinePrimary}
            fullWidth
            required={required}
            placeholder={placeholder}
            label={label}
            color={color}
            type={type}
            name={name}
            onChange={onChange}
            value={value}
        />
    );
}

// PropTypes
Input.defaultProps = {
    type: "text",
    onChange: null,
    value: "",
    required: false,
    disabled: false,
    name: "",
    placeholder: "",
    label: "",
    variant: "normal",
    margin: "normal",
    color: "primary",
    error: false,
    success: false,
    white: true
};

Input.propTypes = {
    type: PropTypes.oneOf([
        "text",
        "number",
        "email"
    ]),
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    variant: PropTypes.oneOf([
        "filled",
        "outlined",
        "standard"
    ]),
    margin: PropTypes.oneOf([
        "dense",
        "none",
        "normal"
    ]),
    color: PropTypes.oneOf([
        "primary",
        "secondary"
    ]),
    error: PropTypes.bool,
    success: PropTypes.bool,
    white: PropTypes.bool
};

export default Input;
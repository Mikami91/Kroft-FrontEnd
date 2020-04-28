// Dependencies
import React from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
// Styles
import styles from "../../styles/components/customInputStyle.js";

const useStyles = makeStyles(styles);

const RegularInput = (props) => {
    const { disabled, label, name, value, onChange, maxLength, placeholder, required, margin, color, variant } = props;
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
            label={label}
            placeholder={placeholder}
            color={color}
            type={"text"}
            name={name}
            onChange={onChange}
            value={value}
            inputProps={{
                maxLength: maxLength
            }}
        />
    );
}

// PropTypes
RegularInput.defaultProps = {
    type: "text",
    onChange: null,
    value: "",
    maxLength: null,
    required: false,
    disabled: false,
    name: "",
    label: "",
    placeholder: "",
    variant: "normal",
    margin: "normal",
    color: "primary",
    error: false,
    success: false,
    white: true
};

RegularInput.propTypes = {
    type: PropTypes.oneOf([
        "text",
        "number",
        "email",
    ]),
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    maxLength: PropTypes.number,
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

export default RegularInput;
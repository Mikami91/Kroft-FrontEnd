// Dependencies
import React from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment } from "@material-ui/core";
// Theme
import { theme } from '../../themes/theme.js';
// Styles
import styles from "../../styles/components/customInputStyle.js";

const useStyles = makeStyles(styles);

const IconInput = (props) => {
    const { disabled, icon, iconPosition, label, margin, color, name, onChange, placeholder, required, type, value, variant } = props;
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
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            InputProps={icon !== null ? {
                [iconPosition + "Adornment"]: (
                    <InputAdornment position={iconPosition} style={{ color: theme.palette.type === "light" ? "#0000008a" : "#fff" }}>
                        {icon}
                    </InputAdornment>
                ),
            } : null}
        />
    );
}

// PropTypes
IconInput.defaultProps = {
    type: "text",
    icon: [],
    onChange: null,
    value: "",
    required: false,
    disabled: false,
    name: "",
    label: "",
    placeholder: "",
    iconPosition: "end",
    variant: "normal",
    margin: "normal",
    color: "primary",
    error: false,
    success: false,
    white: true
};

IconInput.propTypes = {
    type: PropTypes.oneOf([
        "text",
        "number",
        "email",
        "date"
    ]),
    icon: PropTypes.array,
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
    iconPosition: PropTypes.oneOf([
        "start",
        "end",
    ]),
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

export default IconInput;
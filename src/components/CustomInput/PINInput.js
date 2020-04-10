// Dependencies
import React from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
// Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// Styles
import styles from "../../styles/components/customInputStyle.js";

const useStyles = makeStyles(styles);

const PINInput = (props) => {
    const { disabled, label, margin, color, name, onChange, onClick, placeholder, type, value, variant } = props;
    // Styles
    const classes = useStyles();
    return (
        <TextField
            disabled={disabled}
            variant={variant}
            margin={margin}
            className={classes.labelRoot + classes.underlinePrimary}
            fullWidth
            required
            label={label}
            placeholder={placeholder}
            color={color}
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            disabled={ value.length >= 3 ? false : true }
                            edge="end"
                            onClick={onClick}
                        >
                            <CheckCircleIcon color={ value.length >= 3 ? color : "disabled"} />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}

// PropTypes
PINInput.defaultProps = {
    type: "password",
    onChange: null,
    onClick: null,
    value: "",
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

PINInput.propTypes = {
    type: PropTypes.oneOf([
        "password",
        "text",
        "number",
        "email"
    ]),
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
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

export default PINInput;
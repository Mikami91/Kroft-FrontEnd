// Dependencies
import React from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
// Icons
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// Styles
import styles from "../../styles/components/customInputStyle.js";

const useStyles = makeStyles(styles);

const PasswordInput = (props) => {
    const { disabled, label, margin, name, onChange, value,  variant } = props;
    // Styles
    const classes = useStyles();
    // Local States
    const [values, setValues] = React.useState({
        showPassword: false,
    });
    // Show / Hide password
    const clickShowPassword = () => {
        setValues({ showPassword: !values.showPassword });
    }

    return (
        <TextField
            disabled={disabled}
            variant={variant}
            margin={margin}
            className={classes.labelRoot + classes.underline}
            fullWidth
            required
            label={label}
            type={values.showPassword ? 'text' : 'password'}
            name={name}
            onChange={onChange}
            value={value}

            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <IconButton
                            edge="end"
                            onClick={clickShowPassword}
                        >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}

// PropTypes
PasswordInput.defaultProps = {
    onChange: null,
    value: "",
    disabled: false,
    name: "",
    label: "",
    variant: "normal",
    margin: "normal",
    error: false,
    success: false,
    white: true
};

PasswordInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    disabled: PropTypes.bool,
    name: PropTypes.string,
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
    error: PropTypes.bool,
    success: PropTypes.bool,
    white: PropTypes.bool
};

export default PasswordInput;
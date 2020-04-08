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

const CustomInput = (props) => {
    const { disabled, label, margin, color, name, onChange, value,  variant } = props;
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
            className={classes.labelRoot + classes.underlinePrimary}
            fullWidth
            required
            label={label}
            color={color}
            type="text"
            name={name}
            onChange={onChange}
            value={value}

            // InputProps={{
            //     endAdornment: (
            //         <InputAdornment position="start">
            //                 {values.showPassword ? <VisibilityOff /> : <Visibility />}
            //         </InputAdornment>
            //     ),
            // }}
        />
    );
}

// PropTypes
CustomInput.defaultProps = {
    onChange: null,
    value: "",
    disabled: false,
    name: "",
    label: "",
    variant: "normal",
    margin: "normal",
    color: "primary",
    error: false,
    success: false,
    white: true
};

CustomInput.propTypes = {
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
    color: PropTypes.oneOf([
        "primary",
        "secondary"
    ]),
    error: PropTypes.bool,
    success: PropTypes.bool,
    white: PropTypes.bool
};

export default CustomInput;
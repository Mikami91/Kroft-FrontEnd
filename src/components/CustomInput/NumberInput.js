// Dependencies
import React from 'react';
import PropTypes from "prop-types";
import NumberFormat from 'react-number-format';
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
};

const NumberInput = (props) => {
    const { prefix, displayType, phone, disabled, required, label, type, name, value, onChange, maxLength, margin, placeholder, variant, color } = props;
    const e = {
        target: {}
    };
    return (
        <NumberFormat
            type={type}
            value={value}
            onValueChange={(values) => {
                const { formattedValue, value } = values;
                e.target["name"] = name;
                e.target["value"] = value;
                return onChange(e);
            }}
            displayType={displayType}
            thousandSeparator={phone ? false : true}
            decimalSeparator={phone ? null : "."}
            allowNegative={false}
            allowEmptyFormatting={false}
            allowLeadingZeros={false}
            decimalScale={phone ? "none" : 2}
            isNumericString={true}
            prefix={phone ? "" : prefix + " "}
            // TextFiel props
            disabled={disabled}
            variant={variant}
            margin={margin}
            required={required}
            label={label}
            maxLength={maxLength}
            name={name}
            placeholder={placeholder}
            color={color}
            customInput={RegularInput}
        />
    );
};

// PropTypes
NumberInput.defaultProps = {
    displayType: "input",
    prefix: "Bs",
    phone: false,
    type: "text",
    onChange: null,
    name: "",
    label: "",
    value: "",
    maxLength: null,
    disabled: false,
    required: false,
    placeholder: "",
    variant: "normal",
    margin: "normal",
    color: "primary",
    error: false,
    success: false,
    white: true
};

NumberInput.propTypes = {
    displayType: PropTypes.oneOf([
        "input",
        "text"
    ]),
    prefix: PropTypes.string,
    phone: PropTypes.bool,
    type: PropTypes.oneOf([
        "password",
        "text",
        "tel",
    ]),
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    maxLength: PropTypes.number,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
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

export default NumberInput;

// Dependencies
import React from 'react';
import PropTypes from "prop-types";
import NumberFormat from 'react-number-format';
// Components core
import BsInput from './BsInput.js';

const NumberInput = (props) => {
    const { prefix, displayType, phone, disabled, required, label, type, name, value, onChange, margin, placeholder, variant, color } = props;
    console.log(props);
    const e = {
        target: {}
    };
    return (
        <NumberFormat
            type={type}
            value={value}
            onValueChange={(values) => {
                const {formattedValue, value} = values;
                e.target["name"] = name;
                e.target["value"] = formattedValue;
                return onChange(e);
            }}
            displayType={displayType}
            thousandSeparator={phone ? false : true}
            decimalSeparator={phone ? null : "."}
            allowNegative={false}
            allowEmptyFormatting={false}
            allowLeadingZeros={false}
            decimalScale={phone? "none" : 2}
            isNumericString={true}
            prefix={phone? "" : prefix + " "}

            disabled={disabled}
            variant={variant}
            margin={margin}
            required={required}
            label={label}
            name={name}
            placeholder={placeholder}
            color={color}
            customInput={BsInput}
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

// Dependencies
import React from "react";
import PropTypes from "prop-types";
// Conecction to Store
import { connect } from "react-redux";
// Components
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core";

function CustomMoneyInput(props) {
  const {
    // Props
    variant,
    margin,
    id,
    name,
    value,
    onChange,
    required,
    adornment,
    readOnly,
    helperText,
    color,
    fullWidth,
    size,
    // Redux
    showProgress,
  } = props;

  return (
    <FormControl
      variant={variant}
      margin={margin}
      color={color}
      medium="medium"
      fullWidth={fullWidth}
      size={size}
      required={required}
      disabled={showProgress}
      style={{ width: "-webkit-fill-available" }}
    >
      <OutlinedInput
        type="numeric"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        startAdornment={
          <InputAdornment position="start">{adornment}</InputAdornment>
        }
        inputProps={{
          readOnly: readOnly,
        }}
        labelWidth={0}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
// PropTypes
CustomMoneyInput.defaultProps = {
  variant: "outlined",
  margin: "dense",
  id: "",
  name: "",
  value: null,
  onChange: null,
  required: true,
  adornment: "",
  readOnly: false,
  helperText: "",
  color: "primary",
  fullWidth: true,
  size: "small",
};

CustomMoneyInput.propTypes = {
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  margin: PropTypes.oneOf(["dense", "none", "normal"]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  required: PropTypes.bool,
  adornment: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  readOnly: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium"]),
};

// Connect to Store State
const mapStateToProps = (state) => {
  const { orders } = state;
  return {
    showProgress: orders.loading,
  };
};

export default connect(mapStateToProps, null)(CustomMoneyInput);

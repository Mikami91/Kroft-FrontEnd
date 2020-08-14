// Dependencies
import React from 'react';
import PropTypes from "prop-types";
import moment from 'moment';
import 'moment/locale/es';
// Components Data Picker
import "moment/locale/es";
// import { es } from 'date-fns/locale';
import { DatePicker } from '@material-ui/pickers';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// Styles
import styles from "../../styles/components/customInputStyle.js";
const useStyles = makeStyles(styles);
// Config Locale
moment.locale("es");

const DateInput = (props) => {
    const { disabled, label, name, value, onChange, minDate, maxDate, views, openTo, disablePast, disableFuture, format, invalidDateMessage, autoOk, placeholder, required, margin, color, variant } = props;
    const classes = useStyles();
    const e = { target: {} };
    return (
        <DatePicker
            // Labels
            label={label}
            emptyLabel=""
            invalidLabel="Texto inválido"
            invalidDateMessage={invalidDateMessage}
            maxDateMessage="Rango de fecha no válido"
            minDateMessage="Rango de fecha no válido"
            okLabel="Aceptar"
            cancelLabel="Cancelar"
            clearLabel="Eliminar"
            todayLabel="Hoy"
            // Appearances
            fullWidth
            className={classes.labelRoot + classes.underlinePrimary}
            variant={variant}
            margin={margin}
            color={color}
            // Values
            value={value !== null ? moment(value).add(1, 'days').format('YYYY-MM-DD') : null}
            minDate={minDate}
            maxDate={maxDate}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            // Functions
            clearable
            onChange={
                (date) => {
                    e.target["name"] = name;
                    e.target["value"] = date === null ? null : moment(date).format("YYYY-MM-DD");
                    return onChange(e);
                }
            }
            // Options
            views={views}
            openTo={openTo}
            disablePast={disablePast}
            disableFuture={disableFuture}
            format={format}
            autoOk={autoOk}
        // format="d MMM yyyy"
        // format="yyyy MMM d"
        />
    );
};
// PropTypes
DateInput.defaultProps = {
    onChange: null,
    value: null,
    minDate: null,
    maxDate: null,
    views: ["year", "month", "date"],
    openTo: "year",
    disablePast: false,
    disableFuture: false,
    // format: "yyyy MMM d",
    format: "d MMM yyyy",
    invalidDateMessage: "Formato de fecha inválido",
    autoOk: false,
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
DateInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    views: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
    openTo: PropTypes.oneOf([
        "year",
        "month",
        "date"
    ]),
    disablePast: PropTypes.bool,
    disableFuture: PropTypes.bool,
    format: PropTypes.string,
    invalidDateMessage: PropTypes.string,
    autoOk: PropTypes.bool,
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

export default DateInput;

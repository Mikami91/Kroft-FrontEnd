// Dependencies
import React from 'react';
import PropTypes from "prop-types";
import moment from 'moment';
import 'moment/locale/es';
// Components Data Picker
import "moment/locale/es";
// import { es } from 'date-fns/locale';
import { TimePicker } from '@material-ui/pickers';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// Styles
import styles from "../../styles/components/customInputStyle.js";
const useStyles = makeStyles(styles);
// Config Locale
moment.locale("es");

const TimeInput = (props) => {
    const { disabled, label, name, value, onChange, minDate, maxDate, views, openTo, format, ampm, invalidDateMessage, autoOk, readOnly, placeholder, required, margin, color, variant } = props;
    const classes = useStyles();
    const e = { target: {} };
    return (
        <TimePicker
            // Labels
            label={label}
            emptyLabel=""
            invalidLabel="Valor inválido"
            invalidDateMessage={invalidDateMessage}
            maxDateMessage="Hora no válido"
            minDateMessage="Hora no válido"
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
            value={value}
            minDate={minDate}
            maxDate={maxDate}
            placeholder={placeholder}
            // Functions
            clearable
            onChange={
                (date) => {
                    e.target["name"] = name;
                    e.target["value"] = date === null ? null : moment(date).format();
                    return onChange(e);
                }
            }
            // Options
            views={views}
            openTo={openTo}
            ampm={ampm}
            format={format}
            disabled={disabled}
            autoOk={autoOk}
            readOnly={readOnly}
            required={required}
        />
    );
};
// PropTypes
TimeInput.defaultProps = {
    onChange: null,
    value: null,
    minDate: null,
    maxDate: null,
    views: ["hours", "minutes", "seconds"],
    openTo: "hours",
    ampm: true,
    format: "h:mm a",
    invalidDateMessage: "Formato de hora inválido",
    autoOk: false,
    readOnly: false,
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
TimeInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date),
    ]),
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    views: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
    openTo: PropTypes.oneOf([
        "hours",
        "minutes",
        "seconds"
    ]),
    ampm: PropTypes.bool,
    format: PropTypes.string,
    invalidDateMessage: PropTypes.string,
    autoOk: PropTypes.bool,
    readOnly: PropTypes.bool,
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

export default TimeInput;

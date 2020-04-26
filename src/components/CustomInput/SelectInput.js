// Dependencies
import React from 'react';
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// Styles
import styles from "../../styles/components/customInputStyle.js";

const useStyles = makeStyles(styles);

const SelectInput = (props) => {
    const { disabled, id, label, margin, color, name, categoryList, itemList, onChange, placeholder, required, value, variant } = props;
    console.log(itemList)
    // Styles
    const classes = useStyles();
    return (

        <FormControl
            className={classes.labelRoot + classes.underlinePrimary}
            disabled={disabled}
            variant={variant}
            margin={margin}
            fullWidth
            required={required}
            placeholder={placeholder}
            color={color}
        >
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={id}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            >
                <MenuItem value="">
                    <em>Seleccionar</em>
                </MenuItem>

                {Object.keys(categoryList.data).length === 0 ?

                    itemList.data.map(data => {
                        return (
                            <MenuItem key={data[itemList.key]} value={data[itemList.key]}>{data[itemList.value]}</MenuItem>
                        )
                    }) :

                    categoryList.data.map(index => {
                        return ([
                            <ListSubheader key={index[categoryList.key + categoryList.value]} value={index[categoryList.key]}>{index[categoryList.value]}</ListSubheader>,

                            itemList.data.map(index2 => {
                                if (index2[itemList.key] === index[categoryList.key]) {
                                    return (
                                        <MenuItem key={index2[itemList.key]} value={index2[itemList.key]}>{index2[itemList.value]}</MenuItem>
                                    )
                                };
                            })
                        ])
                    })
                }

            </Select>
        </FormControl>
    );
}

// PropTypes
SelectInput.defaultProps = {
    id: "",
    onChange: null,
    categoryList: {
        data: [],
        key: "id",
        value: "name"
    },
    itemList: {
        data: [],
        key: "id",
        value: "name"
    },
    value: "",
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

SelectInput.propTypes = {
    id: PropTypes.string,
    onChange: PropTypes.func,
    categoryList: PropTypes.object,
    itemList: PropTypes.object,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
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

export default SelectInput;
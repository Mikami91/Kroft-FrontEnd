// Dependencies
import React, { useState, useMemo } from "react";
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/es';
// UI Material Components
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// Core Components
import CustomText from '../Typography/CustomText';
// Icons
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';

function CustomTableListPrints(props) {

    const { header, columns, data, key_field, filter, renderRefresh } = props;

    // Local State
    const [state, setState] = useState({
        rowContent: [],
        isExpanded: false,
        index: null
    });

    // Expanded functions
    const handleOpenExpanded = (index) => {
        setState({
            ...state,
            rowContent: data.filter(i => i.order_number === index.order_number && i.table_id === filter),
            isExpanded: true,
            index: index.order_number
        });
    }

    const handleCloseExpanded = () => {
        setState({
            ...state,
            rowContent: [],
            isExpanded: false,
            index: null
        });
    }

    // Config locale
    moment.locale('es');

    let orders_filtered = [];
    for (let x in data) {
        if (data[x][key_field] === filter) {
            if (check(data[x])) {
                orders_filtered.push(data[x]);
            }
        }
    }
    function check(index) {
        let flag = 0;
        for (let y in orders_filtered) {
            if (orders_filtered[y].order_number === index.order_number) {
                flag = 1
            }
        }
        if (flag === 0) return true
        else return false

    }

    const ExpandedRow = () => {
        return (
            state.rowContent.map(i => (
                <TableRow key={i.id + 'expandible'} tabIndex={1} style={{ backgroundColor: "#777" }} >

                    <TableCell rowSpan={1} />

                    <TableCell colSpan={1} align="right">
                        {i.product_quantity}
                    </TableCell>

                    <TableCell colSpan={3} align="left">
                        {i.product_name}
                    </TableCell>

                </TableRow>
            ))
        );
    }

    // Using useMemo hook
    return useMemo(() => {
        return (
            <TableContainer>
                <Table aria-label="collapsible table">

                    <TableHead>
                        <TableRow>
                            {header.map((index, key) => (
                                <TableCell
                                    key={key + "head"}
                                    align={index.align}
                                    colSpan={index.colSpan}
                                >
                                    {index.text}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {orders_filtered.map((index, key) => ([
                            <TableRow key={key + "row"}>
                                {columns.map((col) => {

                                    if (index[key_field] === filter) {

                                        if (col.type === "text") {
                                            return (
                                                <TableCell
                                                    key={key + "cell-" + col.field}
                                                    align={col.align}
                                                    padding={col.padding}
                                                    size={col.size}
                                                    colSpan={col.colSpan}
                                                >
                                                    {col.time === true ? moment(index[col.field]).fromNow() : <CustomText text={index[col.field]} size={col.fontSize} color={col.color} />}
                                                </TableCell>
                                            );
                                        }

                                        if (col.type === "icon") {
                                            return (
                                                <TableCell
                                                    key={key + "icon-" + col.field}
                                                    align={col.align}
                                                    padding={col.padding}
                                                    size={col.size}
                                                    colSpan={col.colSpan}
                                                >
                                                    <IconButton aria-describedby={key + "icon"} onClick={(e) => col.onClick(e, index)}>

                                                        <col.icon
                                                            fontSize={col.iconSize}
                                                            color={col.iconColor}
                                                        />

                                                    </IconButton>
                                                </TableCell>
                                            );

                                        }

                                        if (col.type === "expand") {
                                            return (
                                                <TableCell
                                                    key={key + "expand-" + col.field}
                                                    align={col.align}
                                                    padding={col.padding}
                                                    size={col.size}
                                                    colSpan={col.colSpan}>
                                                    {state.isExpanded && index.order_number === state.index ?

                                                        <IconButton onClick={handleCloseExpanded}>
                                                            <ExpandLessRoundedIcon fontSize={col.iconSize} color={col.iconColor} />
                                                        </IconButton> :

                                                        <IconButton onClick={() => handleOpenExpanded(index)}>
                                                            <ExpandMoreRoundedIcon fontSize={col.iconSize} color={col.iconColor} />
                                                        </IconButton>

                                                    }
                                                </TableCell>
                                            );
                                        }
                                    }
                                    return null;
                                })}
                            </TableRow>,

                            state.isExpanded && state.index === index.order_number ? <ExpandedRow key={index.order_number} /> : null

                        ]))}

                    </TableBody>

                </Table>
            </TableContainer>
        );
    }, [renderRefresh, state.index]);
};
// PropTypes
CustomTableListPrints.defaultProps = {
    size: "medium",
    padding: "default",
    sticky: false,
    header: [],
    columns: [],
    data: [],
    renderRefresh: null,
};
CustomTableListPrints.propTypes = {
    size: PropTypes.oneOf(["small", "medium"]),
    padding: PropTypes.oneOf(["default", "checkbox", "none"]),
    sticky: PropTypes.bool,
    header: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            align: PropTypes.oneOf(["inherit", "right", "center", "left"]),
            colSpan: PropTypes.number,
        })
    ),
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            field: PropTypes.string,
            type: PropTypes.oneOf(["text", "icon", "expand"]),
            size: PropTypes.oneOf(["medium", "small"]),
            fontSize: PropTypes.oneOf(["large", "medium", "small", "default"]),
            align: PropTypes.oneOf(["inherit", "right", "center", "left"]),
            colSpan: PropTypes.number,
            icon: PropTypes.object,
            iconSize: PropTypes.oneOf(["inherit", "small", "large", "default"]),
            iconColor: PropTypes.oneOf(["inherit", "primary", "secondary", "error"]),
            onClick: PropTypes.func,
        })
    ),
    data: PropTypes.array,
    renderRefresh: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object,
        PropTypes.bool,
    ]),
};

export default CustomTableListPrints;


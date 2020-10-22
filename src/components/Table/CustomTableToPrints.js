// Dependencies
import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
// Conecction to Store
import { connect } from 'react-redux';
// UI Material Components
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
// Styles
import styles from '../../styles/components/tableStyle';

const useStyles = makeStyles(styles);


const CustomTableToPrints = (props) => {
    const {
        /* Redux */
        current,
        /* Props */
        data, renderRefresh } = props;

    // Styles
    const classes = useStyles();

    // Cath Date and Time
    let newDate = new Date();
    let mm = newDate.getMonth() + 1;
    let dd = newDate.getDate();
    let yy = newDate.getFullYear();
    let h = newDate.getHours();
    let mn = newDate.getMinutes();

    let currentDate = yy + '-' + mm + '-' + dd + ' ' + h + ':' + mn;

    // Create a new Array object, products list with Prints categories
    const result = data.reduce(function (r, a) {
        r[a.print_category_name] = r[a.print_category_name] || [];
        r[a.print_category_name].push(a);
        return r;
    }, Object.create(null));

    //EPSON TM-T88V Receipt


    // Using useMemo hook
    return useMemo(() => {
        return (

            <Table size="small" className={classes.tablePrint}>

                {Object.entries(result).map(index => (

                    <Fragment key={index[0] + 'f'}>

                        <TableHead key={index[0] + 'h'}>

                            <TableRow>
                                <TableCell className={classes.tTableName} align="left" colSpan={1}>{(`${current.table_name} ${current.table_number}`).toUpperCase()}</TableCell>
                                <TableCell className={classes.tDate} align="right" colSpan={1}>{currentDate}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className={classes.tCategory} align="center" colSpan={2}>{index[0].toUpperCase()}</TableCell>
                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {index[1].map(i => (

                                <Fragment key={i.product_id + 'f2'}>

                                    <TableRow key={i.product_id}>
                                        <TableCell className={classes.tQuantity2} align="right" colSpan={1}>{i.product_quantity}</TableCell>
                                        <TableCell className={classes.tDetail2} align="left" colSpan={1}>{i.product_name}</TableCell>
                                    </TableRow>

                                    {i.observation === "" ? null :

                                        <TableRow>
                                            <TableCell colSpan={1}></TableCell>
                                            <TableCell className={classes.tObservation} align="left" colSpan={1}>{i.product_observation}</TableCell>
                                        </TableRow>
                                    }

                                </Fragment>

                            ))}

                            <TableRow>
                                <TableCell className={classes.tGhost} colSpan={2}></TableCell>
                            </TableRow>

                        </TableBody>

                    </Fragment>

                ))}

            </Table >

        );
    }, [renderRefresh]);
};

// PropTypes
CustomTableToPrints.defaultProps = {
    data: [],
    renderRefresh: null,
};
CustomTableToPrints.propTypes = {
    data: PropTypes.array,
    renderRefresh: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object,
        PropTypes.bool,
    ]),
};

// Connect to Store State
const mapStateToProps = state => {
    const { product } = state;
    return {
        current: product.current,
    }
};

export default connect(mapStateToProps, null)(CustomTableToPrints);

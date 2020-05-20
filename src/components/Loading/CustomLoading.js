// Dependencies
import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
// Styles
import styles from "../../styles/components/customLoadingStyle.js";

const useStyles = makeStyles(styles);

const CustomLoadin = (props) => {
    const { color, linear, open, inside, borderless, text } = props;
    // Styles
    const classes = useStyles();
    const BackdropClasses = classNames({
        [classes.backdrop]: true,
        [classes.inside]: inside,
        [classes.borderless]: borderless,
    });
    return (
        <Backdrop
            className={BackdropClasses}
            open={open}
        >
            <div className={classes.grid}>
                <div>
                    {linear ? <LinearProgress color={color} /> : <CircularProgress color={color} />}
                </div>
                <div>
                    {text}
                </div>
            </div>
        </Backdrop>
    );
}

// PropTypes
CustomLoadin.defaultProps = {
    linear: false,
    color: "primary",
    open: false,
    inside: false,
    borderless: false,
    children: ""
};

CustomLoadin.propTypes = {
    linear: PropTypes.bool,
    color: PropTypes.oneOf([
        "primary",
        "secondary"
    ]),
    open: PropTypes.bool,
    inside: PropTypes.bool,
    borderless: PropTypes.bool,
    children: PropTypes.string
};

export default CustomLoadin;
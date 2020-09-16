// Dependencies
import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
// Icons
import CloseIcon from '@material-ui/icons/Close';
// Styles
import styles from "../../styles/components/snackbarContentStyle";

const useStyles = makeStyles(styles);

function TransitionRight(props) {
    return <Slide {...props} direction="left" />;
}

function CustomSnackbar(props) {
    const { open, onClose, vertical, horizontal, message, duration, severity } = props;
    const classes = useStyles();

    const contentClasses = classNames({
        [classes[severity]]: true,
    });

    // console.log(message);
    // if (typeof message === 'object') {

    //     // for (let [key, value] of Object.entries(message)) {
    //     //     console.log(`key=${key} value=${value}`);
    //     //     console.log(value);
    //     // }

    //     Object.entries(message).map((key, value) =>
    //         console.log(key[1])
    //     )
    // }
    return (
        <Snackbar
            anchorOrigin={{
                vertical: vertical,
                horizontal: horizontal,
            }}
            open={open}
            autoHideDuration={duration}
            onClose={onClose}
            TransitionComponent={TransitionRight}
        >
            <SnackbarContent
                className={contentClasses}
                aria-describedby="custom-snackbar"
                message={
                    <Fragment>
                        <span id="custom-snackbar" className={classes.message}>
                            {
                                typeof message === 'object' ?
                                    <ul>
                                        {Object.entries(message).map((key, value) =>
                                            <li key={key}>
                                                {key[1]}
                                            </li>
                                        )}

                                    </ul> : message
                            }
                        </span>

                    </Fragment>
                }
                action={
                    <Fragment>
                        {/* <Button color="inherit" size="small" onClick={onClose}>
                            UNDO
                        </Button> */}
                        <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Fragment>
                }
            />
        </Snackbar>
    );
}
// Proptypes
CustomSnackbar.defaultProps = {
    open: false,
    onClose: null,
    vertical: "top",
    horizontal: "right",
    message: "...",
    duration: 3500,
    severity: "default"
};
CustomSnackbar.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    horizontal: PropTypes.oneOf(["center", "left", "right"]),
    vertical: PropTypes.oneOf(["bottom", "top"]),
    message: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    duration: PropTypes.number,
    severity: PropTypes.oneOf(["default", "success", "info", "warning", "danger", "primary", "secondary"]),

};

export default CustomSnackbar;

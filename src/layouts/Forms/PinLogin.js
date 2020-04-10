// Dependencies
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// core components
import Button from "../../components/CustomButtons/Button.js";
import PINInput from '../../components/CustomInput/PINInput.js';


import styles from "../../styles/pages/LoginStyle.js";

const useStyles = makeStyles(styles);

export default function PinLogin(props) {
    const [state, setState] = useState({
        pin: "",
        error: false
    });
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    };
    const handleLogin = (e) => {
        e.preventDefault();
        alert("Pin: " + state.pin);
    }
    const classes = useStyles();
    return (
        <form className={classes.pinForm} id="pin-login" onSubmit={handleLogin}>
            {/* <p className={classes.divider}>Or Be Classical</p> */}
            <PINInput
                variant={'outlined'}
                margin={'dense'}
                color="primary"
                // disabled={showProgress}
                type="password"
                // label={'PIN'}
                placeholder="PIN"
                name="pin"
                onChange={handleChange}
                value={state.pin}
                onClick={handleLogin}
                required
            />
        </form>
    );
};

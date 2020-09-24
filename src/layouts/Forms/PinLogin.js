// Dependencies
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import PINInput from '../../components/CustomInput/PINInput.js';
// Styles
import styles from "../../styles/pages/LoginStyle.js";
// Functions
import { employeeLoginPin } from "../../functions/employeeFunctions";

const useStyles = makeStyles(styles);

export default function PinLogin(props) {
    // Local state
    const [state, setState] = useState({
        pin: "",
        error: false
    });
    // Inputs changes
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };
    // Hooks
    let history = useHistory();
    // Function
    const handleLogin = (e) => {
        e.preventDefault();
        employeeLoginPin(state).then((response) => {
            if (typeof response !== 'undefined') {
                if (response.success === true) {

                    switch (response.data.rol_id) {
                        case 1:
                            history.push('/Kroft-FrontEnd/sales');
                            break;
                        case 2:
                            history.push('/Kroft-FrontEnd/collects');
                            break;

                        default:
                            break;
                    }
                }
            }
        });
    };
    const classes = useStyles();
    return (
        <form className={classes.pinForm} id="pin-login" onSubmit={handleLogin} autoComplete="off">
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

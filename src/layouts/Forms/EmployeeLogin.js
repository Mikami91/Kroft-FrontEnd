// Dependencies
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import PersonIcon from '@material-ui/icons/Person';
// core components
import Button from "../../components/CustomButtons/Button.js";
import PasswordInput from '../../components/CustomInput/PasswordInput.js';
import IconInput from '../../components/CustomInput/IconInput.js';


import styles from "../../styles/pages/LoginStyle.js";

const useStyles = makeStyles(styles);

export default function EmployeeLogin(props) {
    const [state, setState] = useState({
        user: "",
        password: "",
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
        alert("User: " + state.user + ", Password: " + state.password);
    }
    const classes = useStyles();
    return (
        <form className={classes.form} id="employee-login" onSubmit={handleLogin}>
            {/* <p className={classes.divider}>Or Be Classical</p> */}
            <IconInput
                variant={'standard'}
                margin={'dense'}
                color="primary"
                // disabled={showProgress}
                type="text"
                label={'Usuario'}
                name="user"
                onChange={handleChange}
                value={state.user}
                required
                icon={<PersonIcon />}
                iconPosition="end"
            />
            <PasswordInput
                variant={'standard'}
                margin={'dense'}
                color="primary"
                // disabled={showProgress} 
                label={'Contraseña'}
                name="password"
                onChange={handleChange}
                value={state.password}
            />
            <Button /*simple*/ color="primary" size="sm" type="submit">
                Iniciar
            </Button>
        </form>
    );
};

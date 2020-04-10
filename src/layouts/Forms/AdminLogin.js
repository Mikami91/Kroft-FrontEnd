// Dependencies
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import EmailIcon from '@material-ui/icons/Email';
// core components
import Button from "../../components/CustomButtons/Button.js";
import PasswordInput from '../../components/CustomInput/PasswordInput.js';
import IconInput from '../../components/CustomInput/IconInput.js';
// Style
import styles from "../../styles/pages/LoginStyle.js";

const useStyles = makeStyles(styles);

export default function AdminLogin(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
        error: false
    });
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };
    const handleLogin = (e) => {
        e.preventDefault();
        alert("User: " + state.email + ", Password: " + state.password);
    }
    const classes = useStyles();
    return (
        <form className={classes.form} id="admin-login" onSubmit={handleLogin}>
            <IconInput
                variant={'standard'}
                margin={'dense'}
                color="primary"
                // disabled={showProgress}
                type="email"
                label={'Correo'}
                name="email"
                onChange={handleChange}
                value={state.email}
                required
                icon={<EmailIcon />}
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
            <Button color="primary" size="sm" type="submit">
                Iniciar
            </Button>
        </form>
    );
};

// Dependencies
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import EmailIcon from '@material-ui/icons/Email';
// core components
import IconInput from '../../components/CustomInput/IconInput.js';
// Style
import styles from "../../styles/pages/LoginStyle.js";

const useStyles = makeStyles(styles);

export default function EmailForm(props) {
    const [state, setState] = useState({
        email: "",
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
        alert("Email: " + state.email);
    }
    const classes = useStyles();
    return (
        <form className={classes.form} id="email-form" onSubmit={handleLogin}>
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
            {/* <Button color="primary" size="sm" type="submit">
                Iniciar
            </Button> */}
        </form>
    );
};

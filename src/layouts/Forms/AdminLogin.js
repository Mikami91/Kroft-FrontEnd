// Dependencies
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Lock from "@material-ui/icons/Lock";
import Visibility from '@material-ui/icons/Visibility';

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
// core components
import Button from "../../components/CustomButtons/Button.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
// import CustomInput from "../../components/CustomInput/CustomInput.js";
import Input from "../../components/Input/Input.js";
import PasswordInput from '../../components/CustomInput/PasswordInput.js';
import CustomTabs from '../../components/CustomTabs/CustomTabs.js';


import styles from "../../styles/pages/LoginStyle.js";

const useStyles = makeStyles(styles);

export default function AdminLogin(props) {
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
    const { ...rest } = props;
    return (
        <form className={classes.form} id="employee-login" onSubmit={handleLogin}>
            {/* <p className={classes.divider}>Or Be Classical</p> */}
            {/* <CustomInput
                labelText="First Name..."
                id="user"
                name="user"
                formControlProps={{
                    fullWidth: true
                }}
                onChange={handleChange}
                value={state.user}
                inputProps={{
                    type: "text",
                    endAdornment: (
                        <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                        </InputAdornment>
                    )
                }}
            /> */}
            <Input
                variant={'standard'}
                margin={'dense'}
                color="primary"
                // disabled={showProgress} 
                label={'Correo'}
                name="user"
                onChange={handleChange}
                value={state.user}
            />
            <PasswordInput
                variant={'standard'}
                margin={'dense'}
                // color="secondary"
                // disabled={showProgress} 
                label={'Contraseña'}
                name="password"
                onChange={handleChange}
                value={state.password}
            />
            {/* <CardFooter className={classes.cardFooter}> */}
                <Button simple color="primary" size="lg" type="submit">
                    Iniciar
                </Button>
            {/* </CardFooter> */}
        </form>
    );
}

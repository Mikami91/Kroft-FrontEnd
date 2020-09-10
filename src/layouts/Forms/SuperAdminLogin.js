// Dependencies
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
// core components
import Button from "../../components/CustomButtons/Button.js";
import PasswordInput from "../../components/CustomInput/PasswordInput.js";
import IconInput from "../../components/CustomInput/IconInput.js";
// Style
import styles from "../../styles/pages/LoginStyle.js";
// Functions
import { superAdminLogin } from "../../functions/superAdminFunctions";

const useStyles = makeStyles(styles);

export default function SuperAdminLogin(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: false,
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // Hooks
  let history = useHistory();
  // Login function
  const handleLogin = (e) => {
    e.preventDefault();
    superAdminLogin(state).then((response) => {
      if (typeof response !== 'undefined') {
        console.log(response);
        if (response.success === true) {
          history.push('/Kroft-FrontEnd/dashboard');
        }
      }
    });
  };

  const classes = useStyles();
  return (
    <form className={classes.form} id="super-admin-login" onSubmit={handleLogin} autoComplete="off">
      <IconInput
        variant={"standard"}
        margin={"dense"}
        color="primary"
        // disabled={showProgress}
        type="email"
        label={"Correo electrónico"}
        name="email"
        onChange={handleChange}
        value={state.email}
        required
        icon={<EmailRoundedIcon />}
        iconPosition="end"
      />
      <PasswordInput
        variant={"standard"}
        margin={"dense"}
        color="primary"
        // disabled={showProgress}
        label={"Contraseña"}
        name="password"
        onChange={handleChange}
        value={state.password}
      />
      <Button color="primary" size="sm" type="submit">
        Iniciar
        </Button>
    </form>
  );
}

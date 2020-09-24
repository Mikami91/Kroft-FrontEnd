// Dependencies
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import PersonIcon from "@material-ui/icons/Person";
// core components
import CustomButton from "../../components/CustomButtons/CustomButton.js";
import PasswordInput from "../../components/CustomInput/PasswordInput.js";
import IconInput from "../../components/CustomInput/IconInput.js";
// Style
import styles from "../../styles/pages/LoginStyle.js";
// Functions
import { adminLogin } from "../../functions/adminFunctions";

const useStyles = makeStyles(styles);

export default function AdminLogin(props) {
  const [state, setState] = useState({
    user: "",
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
    adminLogin(state).then((response) => {
      if (typeof response !== 'undefined') {
        if (response.success === true) {
          history.push('/Kroft-FrontEnd/dashboard');
        }
      }
    });
  };

  const classes = useStyles();
  return (
    <form className={classes.form} id="admin-login" onSubmit={handleLogin} autoComplete="off">
      <IconInput
        variant={"standard"}
        margin={"dense"}
        color="primary"
        // disabled={showProgress}
        type="text"
        label={"Usuario"}
        name="user"
        onChange={handleChange}
        value={state.user}
        required
        icon={<PersonIcon />}
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
      <CustomButton color="primary" size="sm" type="submit">
        Iniciar
        </CustomButton>
    </form>
  );
}

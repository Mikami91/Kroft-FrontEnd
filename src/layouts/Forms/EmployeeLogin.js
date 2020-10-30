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
// Styles
import styles from "../../styles/pages/LoginStyle.js";
// Functions
import { employeeLogin } from "../../functions/cruds/employeeFunctions";

const useStyles = makeStyles(styles);

export default function EmployeeLogin(props) {
  // Local state
  const [state, setState] = useState({
    user: "",
    password: "",
    error: false,
  });
  // Inputs changes
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
    employeeLogin(state).then((response) => {
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
    <form className={classes.form} id="employee-login" onSubmit={handleLogin} autoComplete="off">
      {/* <p className={classes.divider}>Or Be Classical</p> */}
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
      <CustomButton /*simple*/ color="primary" size="sm" type="submit">
        Iniciar
        </CustomButton>
    </form>
  );
}

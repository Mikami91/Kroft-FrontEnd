// Dependencies
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import PersonIcon from "@material-ui/icons/Person";
// core components
import CustomButton from "../../components/CustomButtons/CustomButton.js";
import PasswordInput from "../../components/CustomInput/PasswordInput.js";
import UserInput from "../../components/CustomInput/UserInput.js";
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
      if (typeof response !== "undefined") {
        if (response.success === true) {
          switch (response.data.rol_id) {
            case 1:
              history.push("/sales");
              break;
            case 2:
              localStorage.setItem("box_id", 0);
              history.push("/collects");
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
    <form
      className={classes.form}
      id="employee-login"
      onSubmit={handleLogin}
      autoComplete="off"
    >
      {/* <p className={classes.divider}>Or Be Classical</p> */}
      <UserInput
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

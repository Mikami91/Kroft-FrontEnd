// Dependencies
import React from "react";
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
import CustomInput from "../../components/CustomInput/CustomInput.js";
import PasswordInput from '../../components/Input/PasswordInput.js';
import CustomTabs from '../../components/CustomTabs/CustomTabs.js';


import styles from "../../styles/pages/LoginStyle.js";

const useStyles = makeStyles(styles);

export default function EmployeeLogin(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <form className={classes.form}>
            {/* <p className={classes.divider}>Or Be Classical</p> */}
            <CustomInput
                labelText="First Name..."
                id="first"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    type: "text",
                    endAdornment: (
                        <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                        </InputAdornment>
                    )
                }}
            />
            <PasswordInput
                variant={'standard'}
                margin={'dense'}
                // disabled={showProgress} 
                label={'Contraseña'}
            // onChange={handleChange}
            // value={state.password}
            />
            <CardFooter className={classes.cardFooter}>
                <Button simple color="primary" size="lg">
                    Get started
                </Button>
            </CardFooter>
        </form>
    );
}

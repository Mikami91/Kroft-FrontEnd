// Dependencies
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
// @material-ui/icons
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
// core components
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CustomBotton from '../../components/CustomButtons/Button.js'
// Assets
import image from '../../assets/img/defaults/user.png';

import Button from "../../components/CustomButtons/Button.js";
import PasswordInput from '../../components/CustomInput/PasswordInput.js';
import IconInput from '../../components/CustomInput/IconInput.js';


import styles from "../../styles/pages/LoginStyle.js";

const useStyles = makeStyles(styles);

export default function EmployeeAdd(props) {
    const [state, setState] = useState({
        name: "",
        born: "",
        phone: "",
        position: "",
        salary: "",
        user: "",
        password: "",
        pin: "",
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
        alert("User: " + state.user + ", Password: " + state.password);
    }
    const classes = useStyles();
    return (
        <form id="employee-add" onSubmit={handleLogin}>
            {/* <p className={classes.divider}>Or Be Classical</p> */}
            <Card variant="cardForm">
                <CardHeader color="info" avatar>
                    <CardIcon color="info" avatar>
                        <AccountBoxIcon />
                    </CardIcon>
                    <p className={classes.cardCategory} style={{ textAlign: "right", padding: "0px 8px 18px 0px" }}>
                        <IconButton edge="start">
                            <DeleteIcon color="primary" />
                        </IconButton>

                        <IconButton edge="end">
                            <AddAPhotoIcon color="primary" />
                        </IconButton>
                    </p>
                </CardHeader>

                <CardBody form>

                    <Grid
                        container
                        //   className={classes.content}
                        justify="center"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            xl={6}
                            elevation={6}
                            square="true"
                        >
                            <IconInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="text"
                                label={'Nombre completo'}
                                name="name"
                                onChange={handleChange}
                                value={state.name}
                                required
                                icon={<AccountBoxIcon />}
                                iconPosition="end"
                            />
                            <IconInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="text"
                                label={'Fecha de nacimiento'}
                                name="born"
                                onChange={handleChange}
                                value={state.born}
                                required
                                icon={<CalendarTodayIcon />}
                                iconPosition="end"
                            />
                            <IconInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="number"
                                label={'Numero'}
                                name="phone"
                                onChange={handleChange}
                                value={state.phone}
                                required
                                icon={<PhoneAndroidIcon />}
                                iconPosition="end"
                            />
                            <IconInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="text"
                                label={'Cargo'}
                                name="position"
                                onChange={handleChange}
                                value={state.position}
                                required
                                icon={<AssignmentIndIcon />}
                                iconPosition="end"
                            />

                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            xl={6}
                            elevation={6}
                            square="true"
                        >
                            <IconInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="number"
                                label={'Salario'}
                                name="salary"
                                onChange={handleChange}
                                value={state.salary}
                                required
                                icon={<PaymentIcon />}
                                iconPosition="end"
                            />
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
                            <IconInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="text"
                                label={'Contraseña'}
                                name="password"
                                onChange={handleChange}
                                value={state.password}
                                required
                                icon={<LockIcon />}
                                iconPosition="end"
                            />
                            <IconInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="text"
                                label={'Pin'}
                                name="pin"
                                onChange={handleChange}
                                value={state.pin}
                                required
                                icon={<VpnKeyIcon />}
                                iconPosition="end"
                            />

                        </Grid>
                    </Grid>


                </CardBody>

                <CardFooter form>

                    <CustomBotton form="employee-add" size="sm" type="submit">
                        Registrar
                            </CustomBotton>

                </CardFooter>
            </Card>


            {/* <PasswordInput
                variant={'standard'}
                margin={'dense'}
                color="primary"
                // disabled={showProgress} 
                label={'Contraseña'}
                name="password"
                onChange={handleChange}
                value={state.password}
            />
            <PasswordInput
                variant={'standard'}
                margin={'dense'}
                color="primary"
                // disabled={showProgress} 
                label={'PIN'}
                name="pin"
                onChange={handleChange}
                value={state.pin}
            /> */}

        </form>
    );
};

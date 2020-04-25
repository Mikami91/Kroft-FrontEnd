// Dependencies
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import CardMedia from "@material-ui/core/CardMedia";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
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
import AvatarForm from '../../components/Avatar/Avatarform.js';
import CustomBotton from '../../components/CustomButtons/Button.js'
import CustomLoading from '../../components/Loading/CustomLoading.js';
// Assets
import image from '../../assets/img/defaults/user.png';

import Button from "../../components/CustomButtons/Button.js";
import PasswordInput from '../../components/CustomInput/PasswordInput.js';
import IconInput from '../../components/CustomInput/IconInput.js';


import styles from "../../styles/pages/LoginStyle.js";

const useStyles = makeStyles(styles);

export default function EmployeeAdd(props) {
    // Local State
    const [state, setState] = useState({
        image: '',
        name: "",
        born: "",
        phone: "",
        position: "",
        salary: "",
        user: "",
        password: "",
        pin: "",
        isUpload: false,
        error: false
    });
    // Change State for Inputs
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };
    // Empty State values
    const handleEmpty = (e) => {
        setState({
            image: '',
            name: "",
            born: "",
            phone: "",
            position: "",
            salary: "",
            user: "",
            password: "",
            pin: "",
            isUpload: false,
            error: false
        });
    };

    // Changes State for Image
    const handleImage = (e) => {
        setState({
            ...state,
            isUpload: true
        });
        //e.preventDefault();
        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setState({
                    ...state,
                    image: reader.result,
                    file: [file],
                    isUpload: false
                });
            }
            reader.readAsDataURL(file)
            // Empty input file value
            e.target.value = null;
        }
    };

    // Empty State of Image
    const handleEmptyImage = (e) => {
        setState({
            ...state,
            image: '',
            file: null,
        });
        e.target.value = null;
    };
    // Register function
    const handleLogin = (e) => {
        e.preventDefault();
        handleEmpty();
    }
    const classes = useStyles();
    return (
        <form id="employee-add" onSubmit={handleLogin}>
            {/* <p className={classes.divider}>Or Be Classical</p> */}


            <Card variant="cardForm">
                <CustomLoading inside color="secondary" open={state.isUpload} />
                <CardHeader color="success" avatar>

                    <AvatarForm
                        image={state.image === "" ? image : state.image}
                        alt="Imagen"
                        title="Imagen"
                    />
                    <input
                        // disabled={state.isUpload || showProgress ? true : false}
                        accept="image/png, image/jpeg, image/jpg"
                        id="input-file"
                        type="file"
                        name="image"
                        onChange={handleImage}
                        style={{ display: 'none' }}
                    />

                    <p className={classes.cardCategory} style={{ textAlign: "right", padding: "0px 8px 18px 0px" }}>
                        {/* <Tooltip title="Eliminar imagen" arrow open={ state.image === "" ? false : true }> */}
                        <IconButton edge="start" onClick={handleEmptyImage} disabled={state.image === "" || state.isUpload ? true : false}>
                            <label>
                                <DeleteIcon />
                            </label>
                        </IconButton>
                        {/* </Tooltip> */}

                        {/* <Tooltip title="Agregar imagen" arrow> */}
                        <IconButton edge="end" disabled={state.isUpload ? true : false} >
                            <label htmlFor="input-file">
                                <AddAPhotoIcon />
                            </label>
                        </IconButton>
                        {/* </Tooltip> */}
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
                                // icon={<AccountBoxIcon />}
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
                                // icon={<CalendarTodayIcon />}
                                iconPosition="end"
                            />
                            <IconInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="number"
                                label={'Celular'}
                                name="phone"
                                onChange={handleChange}
                                value={state.phone}
                                required
                                // icon={<PhoneAndroidIcon />}
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
                                // icon={<AssignmentIndIcon />}
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
                                // icon={<PaymentIcon />}
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
                                // icon={<PersonIcon />}
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
                                // icon={<LockIcon />}
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
                                // icon={<VpnKeyIcon />}
                                iconPosition="end"
                            />

                        </Grid>
                    </Grid>


                </CardBody>

                <CardFooter form>

                    <CustomBotton form="employee-add" size="sm" type="submit" disabled={state.isUpload} >
                        Registrar
                    </CustomBotton>

                </CardFooter>
            </Card>

        </form>
    );
};

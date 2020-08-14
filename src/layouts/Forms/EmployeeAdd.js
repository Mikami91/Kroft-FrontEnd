// Dependencies
import React, { useState } from "react";
import moment from 'moment';
import 'moment/locale/es';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
// @material-ui/icons
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DeleteIcon from '@material-ui/icons/Delete';
// core components
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CardIconActions from '../../components/Card/CardIconActions.js';
import AvatarForm from '../../components/Avatar/Avatarform.js';
import IconInput from '../../components/CustomInput/IconInput.js';
import SelectInput from '../../components/CustomInput/SelectInput.js';
import DateInput from '../../components/CustomInput/DateInput.js';
import NumberInput from '../../components/CustomInput/NumberInput.js';
import CustomBotton from '../../components/CustomButtons/Button.js';
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomDivider from '../../components/Divider/CustomDivider.js';
// Functions
import { employeeCreate } from "../../functions/employeeFunctions";
// Assets
import image from '../../assets/img/defaults/user.png';
// Varieables
import { data } from '../../variables/JSON.js';
// Styles
import styles from "../../styles/pages/LoginStyle.js";
// Make styles
const useStyles = makeStyles(styles);
// Configs
moment.locale("en");
moment().format('l');

export default function EmployeeAdd(props) {

    let arr = ['admin_id',
        'rol_id',
        'photo',
        'first_name',
        'last_name',
        'birthdate',
        'gender',
        'phone',
        'address',
        'reference_phone',
        'entry_date',
        'user',
        'password',
        'pin',
        'head_area',];

    // Local State
    const [state, setState] = useState({
        // Others
        admin_id: localStorage.getItem("admin_id"),
        rol_id: "",
        // Employee
        photo: null,
        first_name: "",
        last_name: "",
        birthdate: null,
        gender: "",
        phone: null,
        address: "",
        reference_phone: null,
        entry_date: null,
        user: "",
        password: "",
        pin: "",
        head_area: false,
        // Salary
        salary_month: null,
        paid_amount: null,
        // Photo
        file: null,
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

    const handleChangeHeadArea = (e) => {
        setState({
            ...state,
            head_area: !state.head_area
        });
    };
    // Empty State values
    const handleEmpty = (e) => {
        setState({
            image: null,
            name: "",
            born: null,
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
                    file: {
                        image: reader.result,
                        type: file.type,
                        size: file.size,
                    },
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
            file: null
        });
        e.target.value = null;
    };

    // Login function
    const handleRegister = (e) => {
        e.preventDefault();
        employeeCreate(state).then((response) => {
            if (typeof response !== 'undefined') {
                if (response.success === true) {
                    console.log("registrado");
                }
            }
        });
    };
    const classes = useStyles();
    return (
        <form id="employee-add" onSubmit={handleRegister}>
            {/* <p className={classes.divider}>Or Be Classical</p> */}
            <Card variant="cardForm">

                <CustomLoading inside color="secondary" open={state.isUpload} />

                <CardHeader color="success" avatar>
                    <AvatarForm
                        image={state.file === null ? image : state.file.image}
                        alt="Imagen"
                        title="Imagen"
                    />
                    <input
                        // disabled={state.isUpload || showProgress ? true : false}
                        accept="image/png, image/jpeg, image/jpg"
                        id="employee-file"
                        type="file"
                        name="image"
                        onChange={handleImage}
                        style={{ display: 'none' }}
                    />

                    <CardIconActions>
                        <IconButton edge="start" onClick={handleEmptyImage} disabled={state.file === null || state.isUpload ? true : false}>
                            <label>
                                <DeleteIcon />
                            </label>
                        </IconButton>

                        <IconButton edge="end" disabled={state.isUpload ? true : false}
                            onClick={() => { document.getElementById("employee-file").click() }}
                        >
                            <label>
                                <AddAPhotoIcon />
                            </label>
                        </IconButton>
                    </CardIconActions>
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
                            <CustomDivider text="Datos personales" color="warning" margin="dense" bold />

                            <IconInput
                                variant={'standard'} margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="text"
                                label={'Nombre'}
                                name="first_name"
                                onChange={handleChange}
                                value={state.first_name}
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
                                label={'Apellidos'}
                                name="last_name"
                                onChange={handleChange}
                                value={state.last_name}
                                required
                                // icon={<AccountBoxIcon />}
                                iconPosition="end"
                            />
                            <DateInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="text"
                                label={'Fecha de nacimiento'}
                                name="birthdate"
                                onChange={handleChange}
                                value={state.birthdate}
                                minDate={moment().subtract(70, 'years').calendar()}
                                maxDate={moment().subtract(18, 'years').calendar()}
                                required
                            />
                            <SelectInput
                                variant="standard"
                                margin="dense"
                                color="primary"
                                hoverColor="primary"
                                // disabled={showProgress}
                                id="position"
                                label="Género"
                                name="gender"
                                onChange={handleChange}
                                value={state.gender}
                                itemList={{
                                    data: [{ id: 0, gender: "Masculino" }, { id: 1, gender: "Femenino" }],
                                    key: "id",
                                    value: "gender"
                                }}
                                required
                            />

                            <CustomDivider text="Información" color="warning" margin="dense" bold />

                            <NumberInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                label={'Celular'}
                                name="phone"
                                value={state.phone}
                                onChange={handleChange}
                                maxLength={9}
                                required
                                phone
                            />
                            <IconInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="text"
                                label={'Dirección'}
                                name="address"
                                onChange={handleChange}
                                value={state.address}
                                required
                                // icon={<AccountBoxIcon />}
                                iconPosition="end"
                            />
                            <NumberInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                label={'Celular de referencia'}
                                name="reference_phone"
                                value={state.reference_phone}
                                onChange={handleChange}
                                maxLength={9}
                                required
                                phone
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
                            <CustomDivider text="Cargo" color="warning" margin="dense" bold />

                            <DateInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="text"
                                label={'Fecha de ingreso'}
                                name="entry_date"
                                onChange={handleChange}
                                value={state.entry_date}
                                // views={["month", "date"]}
                                openTo="month"
                                minDate={moment().subtract(30, 'years').calendar()}
                                maxDate={moment().add(1, 'years').calendar()}
                                required
                            />

                            <SelectInput
                                variant="standard"
                                margin="dense"
                                color="primary"
                                hoverColor="primary"
                                // disabled={showProgress}
                                id="position"
                                label="Cargo"
                                name="rol_id"
                                onChange={handleChange}
                                value={state.rol_id}
                                itemList={{
                                    data: data,
                                    key: "id",
                                    value: "website"
                                }}
                                required
                            />

                            <FormControlLabel
                                control={<Checkbox checked={state.head_area} onChange={handleChangeHeadArea} name="head_area" />}
                                label="Jefe de área"
                                labelPlacement="end"
                            />

                            <CustomDivider text="Salario" color="warning" margin="dense" bold />

                            <NumberInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                label={'Salario'}
                                name="paid_amount"
                                value={state.paid_amount}
                                onChange={handleChange}
                                prefix={"Bs"}
                                required
                            />
                            <DateInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="text"
                                label={'Fecha de pago'}
                                name="salary_month"
                                onChange={handleChange}
                                value={state.salary_month}
                                views="date"
                                openTo="date"
                                autoOk
                                required
                            />

                            <CustomDivider text="Perfil" color="warning" margin="dense" bold />

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
                        Registrarr
                    </CustomBotton>
                </CardFooter>
            </Card>
        </form>
    );
};

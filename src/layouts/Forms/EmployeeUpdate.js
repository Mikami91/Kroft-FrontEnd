// Dependencies
import React, { useState, useEffect } from "react";
import moment from 'moment';
import 'moment/locale/es';
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// @material-ui/icons
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DeleteIcon from '@material-ui/icons/Delete';
// core components
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardIconActions from '../../components/Card/CardIconActions.js';
import AvatarForm from '../../components/Avatar/Avatarform.js';
import IconInput from '../../components/CustomInput/IconInput.js';
import SelectInput from '../../components/CustomInput/SelectInput.js';
import DateInput from '../../components/CustomInput/DateInput.js';
import NumberInput from '../../components/CustomInput/NumberInput.js';
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomDivider from '../../components/Divider/CustomDivider.js';
// Functions
import { employeeUpdate } from "../../functions/employeeFunctions";
// Apis
import { API } from '../../API/index';
// Configs
moment.locale("en");
moment().format('l');

function EmployeeUpdate(props) {
    const {
        // Redux 
        fetching,
        roles,
        // Props
        data,
        close,
    } = props;
    const current_image = typeof data.photo === "undefined" ? null : `${API}images/employees/${data.photo}`;
    // Local State
    const [state, setState] = useState({
        // Others
        admin_id: "",
        rol_id: "",
        // Employee
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
        photo: null,
        isUpload: false,
        photoChange: false,
        error: false
    });

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setState({
                ...data,
                // Others
                admin_id: data.admin_id,
                rol_id: data.rol_id,
                // Employee
                first_name: data.first_name,
                last_name: data.last_name,
                birthdate: data.birthdate,
                gender: data.gender,
                phone: data.phone,
                address: data.address,
                reference_phone: data.reference_phone,
                entry_date: data.entry_date,
                user: data.user,
                password: data.password,
                pin: data.pin,
                head_area: data.head_area === 0 ? false : true,
                // Salary
                salary_month: data.salary_month,
                paid_amount: data.paid_amount,
                // Photo
                photo: null,
                isUpload: false,
                photoChange: false,
                error: false
            });
        }
    }, [data])

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
            admin_id: localStorage.getItem("admin_id"),
            rol_id: "",
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
            salary_month: null,
            paid_amount: null,
            photo: null,
            isUpload: false,
            photoChange: false,
            error: false
        });
    };

    // Changes State for Image
    const handleImage = (e) => {
        setState({
            ...state,
            isUpload: true,
        });
        //e.preventDefault();
        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setState({
                    ...state,
                    photo: reader.result,
                    isUpload: false,
                    photoChange: true,
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
            photo: null,
            photoChange: false,
        });
        e.target.value = null;
    };

    // Update function
    const handleUpdate = (e) => {
        e.preventDefault();
        employeeUpdate(state).then((response) => {
            if (typeof response !== 'undefined') {
                if (response.success === true) {
                    close();
                    handleEmpty();
                }
            }
        });
    };
    // Using useMemo hook
    // return useMemo(() => {
    return (
        <form id="employee-update" onSubmit={handleUpdate} encType="multipart/form-data" >
            {/* <Card variant="cardForm"> */}

            <CustomLoading inside color="primary" open={state.isUpload || fetching} />

            <CardHeader color="success" avatar modal>
                <AvatarForm
                    image={state.photoChange === true ? state.photo : current_image}
                    alt="Imagen"
                    title="Imagen"
                />
                <input
                    // disabled={state.isUpload || showProgress ? true : false}
                    accept="image/png, image/jpeg, image/jpg"
                    id="employee-file-update"
                    type="file"
                    name="image"
                    onChange={handleImage}
                    style={{ display: 'none' }}
                />

                <CardIconActions>
                    <IconButton edge="start" onClick={handleEmptyImage} disabled={state.photoChange === true || state.isUpload === true ? false : true}>
                        <label>
                            <DeleteIcon />
                        </label>
                    </IconButton>

                    <IconButton edge="end" disabled={state.isUpload ? true : false}
                        onClick={() => { document.getElementById("employee-file-update").click() }}
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
                        md={4}
                        lg={4}
                        xl={4}
                        elevation={6}
                        square="true"
                    >
                        <CustomDivider text="Datos personales" color="warning" margin="dense" bold />

                        <IconInput
                            variant={'standard'} margin={'dense'}
                            color="primary"
                            disabled={fetching}
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
                            disabled={fetching}
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
                            disabled={fetching}
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
                            disabled={fetching}
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
                        <NumberInput
                            variant={'standard'}
                            margin={'dense'}
                            color="primary"
                            disabled={fetching}
                            label={'Celular'}
                            name="phone"
                            value={state.phone}
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
                        md={4}
                        lg={4}
                        xl={4}
                        elevation={6}
                        square="true"
                    >
                        <CustomDivider text="Información" color="warning" margin="dense" bold />

                        <IconInput
                            variant={'standard'}
                            margin={'dense'}
                            color="primary"
                            disabled={fetching}
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
                            disabled={fetching}
                            label={'Celular de referencia'}
                            name="reference_phone"
                            value={state.reference_phone}
                            onChange={handleChange}
                            maxLength={9}
                            required
                            phone
                        />

                        <CustomDivider text="Cargo" color="warning" margin="dense" bold />

                        <DateInput
                            variant={'standard'}
                            margin={'dense'}
                            color="primary"
                            disabled={fetching}
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
                            disabled={fetching}
                            id="position"
                            label="Cargo"
                            name="rol_id"
                            onChange={handleChange}
                            value={state.rol_id}
                            itemList={{
                                data: roles,
                                key: "id",
                                value: "name"
                            }}
                            required
                        />

                        <FormControlLabel
                            control={<Checkbox checked={state.head_area} onChange={handleChangeHeadArea} name="head_area" />}
                            label="Jefe de área"
                            labelPlacement="end"
                        />

                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        xl={4}
                        elevation={6}
                        square="true"
                    >

                        <CustomDivider text="Salario" color="warning" margin="dense" bold />

                        <NumberInput
                            variant={'standard'}
                            margin={'dense'}
                            color="primary"
                            disabled={fetching}
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
                            disabled={fetching}
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
                            disabled={fetching}
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
                            disabled={fetching}
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
                            disabled={fetching}
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

            {/* <CardFooter form>
                <CustomBotton form="employee-update" size="sm" type="submit" disabled={state.isUpload} >
                    Guardar
                    </CustomBotton>
            </CardFooter> */}
            {/* </Card> */}
        </form>
    );
    // }, []);
};
// Connect to Store State
const mapStateToProps = (state) => {
    const { employee, rol } = state;
    return {
        fetching: employee.fetching,
        roles: rol.payload,
    }
};

export default connect(mapStateToProps, null)(EmployeeUpdate);

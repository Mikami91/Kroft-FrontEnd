// Dependencies
import React, { useState, useEffect } from "react";
import 'moment/locale/es';
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
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
import NumberInput from '../../components/CustomInput/NumberInput.js';
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomDivider from '../../components/Divider/CustomDivider.js';
// Functions
import { customerUpdate } from "../../functions/customerFunctions";
// Apis
import { API } from '../../API/index';
// Varieables
import { cities } from '../../variables/cities';

function CustomerUpdate(props) {
    const {
        // Redux 
        fetching,
        // Props
        data,
        close,
    } = props;
    const current_image = typeof data.photo === "undefined" ? null : `${API}images/customers/${data.photo}`;
    // Local State
    const [state, setState] = useState({
        // Others
        admin_id: "",
        // Customer
        first_name: "",
        last_name: "",
        // Shop
        shop_name: "",
        address: "",
        // Information
        city: "",
        phone: null,
        email: "",
        // Photo
        photo: null,
        isUpload: false,
        error: false
    });

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setState({
                ...data,
                // Others
                admin_id: data.admin_id,
                // Customer
                first_name: data.first_name,
                last_name: data.last_name,
                // Shop
                shop_name: data.shop_name,
                address: data.address,
                // Information
                city: data.city,
                phone: data.phone,
                email: data.email,
                // Photo
                photo: data.photo,
                isUpload: false,
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

    // Empty State values
    const handleEmpty = (e) => {
        setState({
            // Others
            admin_id: "",
            // Customer
            first_name: "",
            last_name: "",
            // Shop
            shop_name: "",
            address: "",
            // Information
            city: "",
            phone: null,
            email: "",
            // Photo
            photo: null,
            isUpload: false,
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
        customerUpdate(state).then((response) => {
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
        <form id="customer-update" onSubmit={handleUpdate} encType="multipart/form-data" >

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
                    id="customer-file-update"
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
                        onClick={() => { document.getElementById("customer-file-update").click() }}
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

                        <CustomDivider text="Tienda" color="warning" margin="dense" bold />

                        <IconInput
                            variant={'standard'} margin={'dense'}
                            color="primary"
                            disabled={fetching}
                            type="text"
                            label={'Tienda'}
                            name="shop_name"
                            onChange={handleChange}
                            value={state.shop_name}
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
                            label={'Dirección'}
                            name="address"
                            onChange={handleChange}
                            value={state.address}
                            required
                            // icon={<AccountBoxIcon />}
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
                        <CustomDivider text="Información" color="warning" margin="dense" bold />

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
                        <IconInput
                            variant={'standard'}
                            margin={'dense'}
                            color="primary"
                            disabled={fetching}
                            type="email"
                            label={'Correo electrónico'}
                            name="email"
                            onChange={handleChange}
                            value={state.email}
                            required
                            // icon={<AccountBoxIcon />}
                            iconPosition="end"
                        />
                        <SelectInput
                            variant="standard"
                            margin="dense"
                            color="primary"
                            hoverColor="primary"
                            disabled={fetching}
                            id="city"
                            label="Ciudad"
                            name="city"
                            onChange={handleChange}
                            value={state.city}
                            itemList={{
                                data: cities,
                                key: "name",
                                value: "name"
                            }}
                            required
                        />

                    </Grid>

                </Grid>
            </CardBody>
        </form>
    );
    // }, []);
};
// Connect to Store State
const mapStateToProps = (state) => {
    const { customer } = state;
    return {
        fetching: customer.fetching,
    }
};

export default connect(mapStateToProps, null)(CustomerUpdate);

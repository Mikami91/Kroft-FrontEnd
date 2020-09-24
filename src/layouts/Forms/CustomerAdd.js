// Dependencies
import React, { useState } from "react";
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
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
import NumberInput from '../../components/CustomInput/NumberInput.js';
import CustomBotton from '../../components/CustomButtons/CustomButton.js';
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomDivider from '../../components/Divider/CustomDivider.js';
// Functions
import { customerCreate } from "../../functions/customerFunctions";
// Assets
import image from '../../assets/img/defaults/user.png';
// Varieables
import { cities } from '../../variables/cities';

function CustomerAdd(props) {
    const { fetching } = props;
    // Local State
    const [state, setState] = useState({
        // Others
        admin_id: localStorage.getItem("admin_id"),
        // Shop
        shop_name: "",
        shop_nit: "",
        shop_phone: "",
        shop_city: "",
        shop_address: "",
        // Customer
        contact_name: "",
        contact_phone: "",
        // Photo
        photo: null,
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
            admin_id: localStorage.getItem("admin_id"),
            // Shop
            shop_name: "",
            shop_nit: "",
            shop_phone: "",
            shop_city: "",
            shop_address: "",
            // Customer
            contact_name: "",
            contact_phone: "",
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
            isUpload: true
        });
        //e.preventDefault();
        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setState({
                    ...state,
                    photo: reader.result,
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
            photo: null
        });
        e.target.value = null;
    };

    // Register function
    const handleRegister = (e) => {
        e.preventDefault();
        customerCreate(state).then((response) => {
            if (typeof response !== 'undefined') {
                if (response.success === true) {
                    handleEmpty();
                }
            }
        });
    };
    return (
        <form id="customer-add" onSubmit={handleRegister} encType="multipart/form-data" >
            <Card variant="cardForm">

                <CustomLoading inside color="primary" open={state.isUpload || fetching} />

                {/* <CardHeader color="success" avatar>
                    <AvatarForm
                        image={state.photo === null ? image : state.photo}
                        alt="Imagen"
                        title="Imagen"
                    />
                    <input
                        // disabled={state.isUpload || showProgress ? true : false}
                        accept="image/png, image/jpeg, image/jpg"
                        id="customer-file-create"
                        type="file"
                        name="image"
                        onChange={handleImage}
                        style={{ display: 'none' }}
                    />

                    <CardIconActions>
                        <IconButton edge="start" onClick={handleEmptyImage} disabled={state.photo === null || state.isUpload ? true : false}>
                            <label>
                                <DeleteIcon />
                            </label>
                        </IconButton>

                        <IconButton edge="end" disabled={state.isUpload ? true : false}
                            onClick={() => { document.getElementById("customer-file-create").click() }}
                        >
                            <label>
                                <AddAPhotoIcon />
                            </label>
                        </IconButton>
                    </CardIconActions>
                </CardHeader> */}

                <CardHeader color="primary" dense centered>
                    <h3>Proveedor</h3>
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
                            <CustomDivider text="Empresa" color="warning" margin="dense" bold />

                            <IconInput
                                variant={'standard'} margin={'dense'}
                                color="primary"
                                disabled={fetching}
                                type="text"
                                label={'Nombre'}
                                name="shop_name"
                                onChange={handleChange}
                                value={state.shop_name}
                                required
                                // icon={<AccountBoxIcon />}
                                iconPosition="end"
                            />

                            <NumberInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                disabled={fetching}
                                label={'NIT'}
                                name="shop_nit"
                                value={state.shop_nit}
                                onChange={handleChange}
                                maxLength={15}
                                phone
                                required
                            />

                            <NumberInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                disabled={fetching}
                                label={'Teléfono'}
                                name="shop_phone"
                                value={state.shop_phone}
                                onChange={handleChange}
                                maxLength={9}
                                phone
                                required
                            />

                            <SelectInput
                                variant="standard"
                                margin="dense"
                                color="primary"
                                hoverColor="primary"
                                disabled={fetching}
                                id="city"
                                label="Ciudad"
                                name="shop_city"
                                onChange={handleChange}
                                value={state.shop_city}
                                itemList={{
                                    data: cities,
                                    key: "name",
                                    value: "name"
                                }}
                                required
                            />

                            <IconInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                disabled={fetching}
                                type="text"
                                label={'Dirección'}
                                name="shop_address"
                                onChange={handleChange}
                                value={state.shop_address}
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
                            <CustomDivider text="Contacto" color="warning" margin="dense" bold />

                            <IconInput
                                variant={'standard'} margin={'dense'}
                                color="primary"
                                disabled={fetching}
                                type="text"
                                label={'Nombre'}
                                name="contact_name"
                                onChange={handleChange}
                                value={state.contact_name}
                                required
                                // icon={<AccountBoxIcon />}
                                iconPosition="end"
                            />

                            <NumberInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                disabled={fetching}
                                label={'Celular'}
                                name="contact_phone"
                                value={state.contact_phone}
                                onChange={handleChange}
                                maxLength={9}
                                required
                                phone
                            />

                        </Grid>
                    </Grid>
                </CardBody>

                <CardFooter form>
                    <CustomBotton form="customer-add" size="sm" type="submit" disabled={state.isUpload} >
                        Registrar
                    </CustomBotton>
                </CardFooter>
            </Card>
        </form>
    );
};
// Connect to Store State
const mapStateToProps = (state) => {
    const { customer } = state;
    return {
        fetching: customer.fetching,
    }
};

export default connect(mapStateToProps, null)(CustomerAdd);

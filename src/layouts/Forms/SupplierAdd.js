// Dependencies
import React, { useState } from "react";
import moment from 'moment';
import 'moment/locale/es';
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
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
import DateInput from '../../components/CustomInput/DateInput.js';
import CustomBotton from '../../components/CustomButtons/CustomButton.js'
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomDivider from '../../components/Divider/CustomDivider.js';
// Functions
import { supplierCreate } from "../../functions/supplierFunctions";
// Variables
import { presentationTypes } from '../../variables/presentationTypes.js';
// Assets
import image from '../../assets/img/defaults/product.png';
// Configs
moment.locale("en");
moment().format('l');

function SupplierAdd(props) {
    const { fetching, customers } = props;
    // Local State
    const [state, setState] = useState({
        // Customer
        customer_id: "",
        // Supplier
        name: "",
        unit_type: "",
        presentation: null,
        quantity: null,
        // Prices
        buying_price: null,
        // Information
        observation: "",
        buying_date: null,
        expire_date: null,
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
            // Customer
            customer_id: "",
            // Supplier
            name: "",
            unit_type: "",
            presentation: null,
            quantity: null,
            // Prices
            buying_price: null,
            // Information
            observation: "",
            buying_date: null,
            expire_date: null,
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

    // Create function
    const handleCreate = (e) => {
        e.preventDefault();
        supplierCreate(state).then((response) => {
            if (typeof response !== 'undefined') {
                if (response.success === true) {
                    handleEmpty();
                }
            }
        });
    };

    return (
        <form id="supplier-add" onSubmit={handleCreate}>
            <Card variant="cardForm">

                <CustomLoading inside color="primary" open={state.isUpload || fetching} />

                <CardHeader color="success" avatar>
                    <AvatarForm
                        image={state.photo === null ? image : state.photo}
                        alt="Imagen"
                        title="Imagen"
                        square
                    />
                    <input
                        accept="image/png, image/jpeg, image/jpg"
                        id="supplier-file-create"
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
                            onClick={() => { document.getElementById("supplier-file-create").click() }}
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
                            <CustomDivider text="Proveedor" color="warning" margin="dense" bold />

                            <SelectInput
                                variant="standard"
                                margin="dense"
                                color="primary"
                                hoverColor="primary"
                                disabled={fetching}
                                id="customer_id"
                                label="Proveedor"
                                name="customer_id"
                                onChange={handleChange}
                                value={state.customer_id}
                                itemList={{
                                    data: customers,
                                    key: "id",
                                    value: "shop_name"
                                }}
                                required
                            />

                            <CustomDivider text="Insumo" color="warning" margin="dense" bold />

                            <IconInput
                                variant={'standard'} margin={'dense'}
                                color="primary"
                                disabled={fetching}
                                type="text"
                                label={'Nombre'}
                                name="name"
                                onChange={handleChange}
                                value={state.name}
                                required
                                iconPosition="end"
                            />

                            <CustomDivider text="Presentación" color="warning" margin="dense" bold />

                            <SelectInput
                                variant="standard"
                                margin="dense"
                                color="primary"
                                hoverColor="primary"
                                disabled={fetching}
                                id="unit_type"
                                label="Tipo de unidad"
                                name="unit_type"
                                onChange={handleChange}
                                value={state.unit_type}
                                itemList={{
                                    data: presentationTypes,
                                    key: "symbol",
                                    value: "name"
                                }}
                                required
                            />

                            <NumberInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                disabled={fetching || state.unit_type === "" || state.unit_type === "Unidades"}
                                label={'Presentación'}
                                name="presentation"
                                prefix={state.unit_type === "Kilos" ? "Kg" : state.unit_type === "Litros" ? "L" : ""
                                }
                                value={state.presentation}
                                onChange={handleChange}
                                maxLength={5}
                                required
                            />

                            <NumberInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                disabled={fetching || state.unit_type === ""}
                                label={'Cantidad de unidades'}
                                name="quantity"
                                value={state.quantity}
                                onChange={handleChange}
                                maxLength={5}
                                required
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
                            <CustomDivider text="Precio" color="warning" margin="dense" bold />

                            <NumberInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                disabled={fetching}
                                label={'Precio por unidad'}
                                name="buying_price"
                                value={state.buying_price}
                                onChange={handleChange}
                                prefix={"Bs"}
                                required
                            />

                            <CustomDivider text="Información" color="warning" margin="dense" bold />

                            <TextField
                                variant="standard"
                                color="primary"
                                margin="dense"
                                disabled={fetching}
                                id="observation"
                                label="Observación"
                                name="observation"
                                onChange={handleChange}
                                value={state.observation}
                                fullWidth
                                multiline
                                rows={3}
                            // rowsMax={4}
                            />
                            <DateInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                disabled={fetching}
                                type="text"
                                label={'Fecha de compra'}
                                name="buying_date"
                                onChange={handleChange}
                                value={state.buying_date}
                                minDate={moment().subtract(10, 'years').format("YYYY/MM/DD")}
                                maxDate={moment().format("YYYY/MM/DD")}
                                openTo="date"
                                disableFuture
                                autoOk
                                required
                            />
                            <DateInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                disabled={fetching}
                                type="text"
                                label={'Fecha de vencimiento'}
                                name="expire_date"
                                onChange={handleChange}
                                value={state.expire_date}
                                minDate={moment().format("YYYY/MM/DD")}
                                maxDate={moment().add(10, 'years').format("YYYY/MM/DD")}
                                openTo="date"
                                disablePast
                                autoOk
                                required
                            />

                        </Grid>

                    </Grid>
                </CardBody>

                <CardFooter form>
                    <CustomBotton form="supplier-add" size="sm" type="submit" disabled={state.isUpload} >
                        Agregar
                    </CustomBotton>
                </CardFooter>
            </Card>
        </form>
    );
};
const mapStateToProps = (state) => {
    const { supplier, customer } = state;
    return {
        fetching: supplier.fetching,
        customers: customer.payload,
    }
};

export default connect(mapStateToProps, null)(SupplierAdd);

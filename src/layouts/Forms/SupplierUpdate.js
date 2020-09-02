// Dependencies
import React, { useState, useEffect } from "react";
import moment from 'moment';
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
import DateInput from '../../components/CustomInput/DateInput.js';
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomDivider from '../../components/Divider/CustomDivider.js';
// Functions
import { supplierUpdate } from "../../functions/supplierFunctions";
// Apis
import { API } from '../../API/index';
// Configs
moment.locale("en");
moment().format('l');

function SupplierUpdate(props) {
    const {
        // Redux 
        fetching, customers, categories, subcategories, printscategories,
        // Props
        data, close
    } = props;
    const current_image = typeof data.photo === "undefined" ? null : `${API}images/products/${data.photo}`;
    // Local State
    const [state, setState] = useState({
        // Product
        product_id: "",
        // Customer
        customer_id: "",
        // Supplier
        name: "",
        quantity: null,
        // Prices
        buying_price: null,
        price: null,
        // Categories
        category_id: "",
        sub_category_id: "",
        // Information
        observation: "",
        buying_date: null,
        expire_date: null,
        // Print
        print_category_id: "",
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
                // Customer
                customer_id: data.customer_id,
                // Product
                product_id: data.id,
                // Supplier
                name: data.name,
                quantity: data.quantity,
                // Prices
                buying_price: data.buying_price,
                price: data.price,
                // Categories
                category_id: data.category_id,
                sub_category_id: data.sub_category_id,
                // Information
                observation: data.observation,
                buying_date: data.buying_date,
                expire_date: data.expire_date,
                // Print
                print_category_id: data.print_category_id,
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
    // Empty State values
    const handleEmpty = (e) => {
        setState({
            // Product
            product_id: "",
            // Customer
            customer_id: "",
            // Supplier
            name: "",
            quantity: null,
            // Prices
            buying_price: null,
            price: null,
            // Categories
            category_id: "",
            sub_category_id: "",
            // Information
            observation: "",
            buying_date: null,
            expire_date: null,
            // Print
            print_category_id: "",
            // Photo
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
        supplierUpdate(state).then((response) => {
            if (typeof response !== 'undefined') {
                if (response.success === true) {
                    close();
                    handleEmpty();
                }
            }
        });
    };

    return (
        <form id="supplier-update" onSubmit={handleUpdate}>

            <CustomLoading inside color="primary" open={state.isUpload || fetching} />

            <CardHeader color="success" avatar modal>
                <AvatarForm
                    image={state.photoChange === true ? state.photo : current_image}
                    alt="Imagen"
                    title="Imagen"
                    square
                />
                <input
                    accept="image/png, image/jpeg, image/jpg"
                    id="supplier-file-update"
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
                        onClick={() => { document.getElementById("supplier-file-update").click() }}
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
                            // icon={<AccountBoxIcon />}
                            iconPosition="end"
                        />
                        <NumberInput
                            variant={'standard'}
                            margin={'dense'}
                            color="primary"
                            disabled={fetching}
                            label={'Cantidad'}
                            name="quantity"
                            value={state.quantity}
                            onChange={handleChange}
                            maxLength={5}
                            required
                        />

                        <CustomDivider text="Precios" color="warning" margin="dense" bold />

                        <NumberInput
                            variant={'standard'}
                            margin={'dense'}
                            color="primary"
                            disabled={fetching}
                            label={'Precio de compra'}
                            name="buying_price"
                            value={state.buying_price}
                            onChange={handleChange}
                            prefix={"Bs"}
                            required
                        />
                        <NumberInput
                            variant={'standard'}
                            margin={'dense'}
                            color="primary"
                            disabled={fetching}
                            label={'Precio de venta'}
                            name="price"
                            value={state.price}
                            onChange={handleChange}
                            prefix={"Bs"}
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

                        <CustomDivider text="Categorías" color="warning" margin="dense" bold />

                        <SelectInput
                            variant="standard"
                            margin="dense"
                            color="primary"
                            hoverColor="primary"
                            disabled={fetching}
                            id="category_id"
                            label="Categoría"
                            name="category_id"
                            onChange={handleChange}
                            value={state.category_id}
                            itemList={{
                                data: categories,
                                key: "id",
                                value: "name"
                            }}
                            required
                        />
                        <SelectInput
                            variant="standard"
                            margin="dense"
                            color="primary"
                            hoverColor="primary"
                            disabled={fetching}
                            id="sub_category_id"
                            label="Subcategoría"
                            name="sub_category_id"
                            onChange={handleChange}
                            value={state.sub_category_id}
                            itemList={{
                                data: subcategories,
                                key: "id",
                                value: "name"
                            }}
                            required
                        />

                        <CustomDivider text="Información" color="warning" margin="dense" bold />

                        <IconInput
                            variant={'standard'}
                            margin={'dense'}
                            color="primary"
                            disabled={fetching}
                            type="text"
                            label={'Observación'}
                            name="observation"
                            onChange={handleChange}
                            value={state.observation}
                            // required
                            // icon={<AccountBoxIcon />}
                            iconPosition="end"
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
                            minDate={moment().subtract(10, 'years').calendar()}
                            maxDate={moment().add(10, 'years').calendar()}
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
                            minDate={moment().subtract(10, 'years').calendar()}
                            maxDate={moment().add(10, 'years').calendar()}
                            required
                        />

                        <CustomDivider text="Impresión" color="warning" margin="dense" bold />

                        <SelectInput
                            variant="standard"
                            margin="dense"
                            color="primary"
                            hoverColor="primary"
                            disabled={fetching}
                            id="print_category_id"
                            label="Impresión"
                            name="print_category_id"
                            onChange={handleChange}
                            value={state.print_category_id}
                            itemList={{
                                data: printscategories,
                                key: "id",
                                value: "name"
                            }}
                            required
                        />
                    </Grid>

                </Grid>
            </CardBody>
        </form >
    );
};
const mapStateToProps = (state) => {
    const { supplier, customer, category, subcategory, printcategory } = state;
    return {
        fetching: supplier.fetching,
        customers: customer.payload,
        categories: category.payload,
        subcategories: subcategory.payload,
        printscategories: printcategory.payload,
    }
};

export default connect(mapStateToProps, null)(SupplierUpdate);

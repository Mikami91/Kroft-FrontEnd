// Dependencies
import React, { useState, useEffect } from "react";
import 'moment/locale/es';
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import CardBody from "../../components/Card/CardBody.js";
import IconInput from '../../components/CustomInput/IconInput.js';
import SelectInput from '../../components/CustomInput/SelectInput.js';
import NumberInput from '../../components/CustomInput/NumberInput.js';
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomDivider from '../../components/Divider/CustomDivider.js';
// Functions
import { customerUpdate } from "../../functions/cruds/customerFunctions";
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

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setState({
                ...data,
                // Others
                admin_id: data.admin_id,
                // Shop
                shop_name: data.shop_name,
                shop_nit: data.shop_nit,
                shop_phone: data.shop_phone,
                shop_city: data.shop_city,
                shop_address: data.shop_address,
                // Customer
                contact_name: data.contact_name,
                contact_phone: data.contact_phone,
                // Photo
                photo: null,
                isUpload: false,
                error: false,
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

    return (
        <form id="customer-update" onSubmit={handleUpdate} encType="multipart/form-data" >

            <CustomLoading inside color="primary" open={state.isUpload || fetching} />

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

export default connect(mapStateToProps, null)(CustomerUpdate);

// Dependencies
import React, { useState } from "react";
import moment from 'moment';
import 'moment/locale/es';
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
// core components
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import IconInput from '../../components/CustomInput/IconInput.js';
import SelectInput from '../../components/CustomInput/SelectInput.js';
import NumberInput from '../../components/CustomInput/NumberInput.js';
import DateInput from '../../components/CustomInput/DateInput.js';
import CustomBotton from '../../components/CustomButtons/CustomButton.js'
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomDivider from '../../components/Divider/CustomDivider.js';
// Functions
import { supplierExist } from "../../functions/supplierFunctions";
// Variables
import { presentationTypes } from '../../variables/presentationTypes.js';
// Configs
moment.locale("es");
moment().format('l');

function ExistSupplierAdd(props) {
    const { supplies, fetching, customers } = props;
    // Local State
    const [state, setState] = useState({
        // Customer
        customer_id: "",
        // Supplier
        supply_id: "",
        quantity: null,
        // Prices
        buying_price: null,
        // Information
        observation: "",
        buying_date: null,
        expire_date: null,
        error: false
    });
    // Change State for Inputs
    const handleChange = async (e) => {

        setState({
            ...state,
            supply_id: e.target.name === "customer_id" ? "" : state.supply_id,
            [e.target.name]: e.target.value,
        });
    };
    // Empty State values
    const handleEmpty = (e) => {
        setState({
            // Customer
            customer_id: "",
            // Supplier
            supply_id: "",
            quantity: null,
            // Prices
            buying_price: null,
            // Information
            observation: "",
            buying_date: null,
            expire_date: null,
            error: false
        });
    };

    // Create function
    const handleCreate = (e) => {
        e.preventDefault();
        supplierExist(state).then((response) => {
            if (typeof response !== 'undefined') {
                if (response.success === true) {
                    handleEmpty();
                }
            }
        });
    };

    return (
        <form id="exist-supplier-add" onSubmit={handleCreate}>

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

                        <SelectInput
                            variant="standard"
                            margin="dense"
                            color="primary"
                            hoverColor="primary"
                            disabled={fetching}
                            id="supply_id"
                            label="Insumo"
                            name="supply_id"
                            onChange={handleChange}
                            value={state.supply_id}
                            itemList={{
                                data: supplies.filter((i) => i.customer_id === state.customer_id),
                                key: "id",
                                value: "name"
                            }}
                            required
                        />

                        <CustomDivider text="Cantidad" color="warning" margin="dense" bold />

                        <NumberInput
                            variant={'standard'}
                            margin={'dense'}
                            color="primary"
                            disabled={fetching || state.customer_id === "" || state.supply_id === ""}
                            label={'Cantidad de unidades'}
                            name="quantity"
                            value={state.quantity}
                            onChange={handleChange}
                            maxLength={5}
                            decimal={0}
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
                <CustomBotton form="exist-supplier-add" size="sm" type="submit" disabled={state.isUpload} >
                    Aceptar
                </CustomBotton>
            </CardFooter>
        </form>
    );
};
const mapStateToProps = (state) => {
    const { supplier, customer } = state;
    return {
        supplies: supplier.payload,
        fetching: supplier.fetching,
        customers: customer.payload,
    }
};

export default connect(mapStateToProps, null)(ExistSupplierAdd);

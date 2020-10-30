// Dependencies
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import moment from 'moment';
import 'moment/locale/es';
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import SelectInput from '../../components/CustomInput/SelectInput.js';
import DateInput from '../../components/CustomInput/DateInput.js';
import TimeInput from '../../components/CustomInput/TimeInput.js';
import CustomBotton from '../../components/CustomButtons/CustomButton.js'
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomDivider from '../../components/Divider/CustomDivider.js';
import SingleTabs from '../../components/CustomTabs/SingleTabs';
import TabPanel from "../../components/Panel/TabPanel.js";
// Functions
import { collectProductReport } from "../../functions/cruds/collectFunctions";
// Configs
moment.locale("es");
moment().format('l');

function ProductReport(props) {
    const { categories, subcategories, products, fetching } = props;
    // State for Panel Tabs
    const [value, setValue] = useState(0);
    const handleChangeValue = (event, newValue) => {
        setValue(newValue);
        setState({
            ...state,
            type: newValue === 0 ? "month" : newValue === 1 ? "range" : "hours",
        });
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const [state, setState] = useState({
        type: "month",
        category_id: "",
        sub_category_id: "",
        product_id: "",
        month: null,
        from_month: null,
        to_month: null,
        date: null,
        from_hour: null,
        to_hour: null,
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
            ...state,
            category_id: "",
            sub_category_id: "",
            product_id: "",
            month: null,
            from_month: null,
            to_month: null,
            date: null,
            from_hour: null,
            to_hour: null,
            error: false
        });
    };

    // Report function
    const handleReport = (e) => {
        e.preventDefault();
        collectProductReport(state).then((response) => {
            if (typeof response !== 'undefined') {
                if (response.success === true) {
                    handleEmpty();
                }
            }
        });
    };

    return (
        <form id="product-report" onSubmit={handleReport}>

            <Card variant="cardForm">

                <CustomLoading inside color="primary" open={fetching} />

                <CardHeader color="primary" dense centered>
                    <h3>Parametros</h3>
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
                            xs={10}
                            elevation={6}
                            square="true"
                        >
                            <CustomDivider text="Categoría" color="warning" margin="dense" bold />

                            <SelectInput
                                variant="standard"
                                margin="dense"
                                color="primary"
                                hoverColor="primary"
                                disabled={fetching}
                                id="category_id"
                                label="Seleccionar categoría"
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

                            <CustomDivider text="Subcategoría" color="warning" margin="dense" bold />

                            <SelectInput
                                variant="standard"
                                margin="dense"
                                color="primary"
                                hoverColor="primary"
                                disabled={fetching}
                                id="sub_category_id"
                                label="Seleccionar subcategoría"
                                name="sub_category_id"
                                onChange={handleChange}
                                value={state.sub_category_id}
                                itemList={{
                                    data: subcategories.filter((i) => i.category_id === state.category_id),
                                    key: "id",
                                    value: "name"
                                }}
                            />

                            <CustomDivider text="Producto" color="warning" margin="dense" bold />

                            <SelectInput
                                variant="standard"
                                margin="dense"
                                color="primary"
                                hoverColor="primary"
                                disabled={fetching}
                                id="product_id"
                                label="Seleccionar Producto"
                                name="product_id"
                                onChange={handleChange}
                                value={state.product_id}
                                itemList={{
                                    data: products.filter((i) =>
                                        state.sub_category_id !== ""
                                            ? i.category_id === state.category_id && i.sub_category_id === state.sub_category_id
                                            : i.category_id === state.category_id
                                    ),
                                    key: "id",
                                    value: "name"
                                }}
                            />

                        </Grid>

                        <Grid
                            item
                            xs={12}
                            elevation={6}
                            square="true"
                        >
                            <CustomDivider text="Buscar por:" color="warning" margin="middle" bold />

                            <SingleTabs
                                centered
                                value={value}
                                onChange={handleChangeValue}
                                plainTabs
                                headerColor="primary"
                                tabs={[
                                    {
                                        tabName: "Mes",
                                    },
                                    {
                                        tabName: "Rango",
                                    },
                                    {
                                        tabName: "Horas",
                                    },
                                ]}
                            />

                            <SwipeableViews
                                axis="x"
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} centered>
                                    <DateInput
                                        variant={'standard'}
                                        margin={'dense'}
                                        color="primary"
                                        disabled={fetching}
                                        type="text"
                                        label={'Seleccionar mes'}
                                        name="month"
                                        onChange={handleChange}
                                        value={state.month}
                                        minDate={moment().subtract(30, 'years').format("YYYY/MM/DD")}
                                        maxDate={moment().format("YYYY/MM/DD")}
                                        format="MMM yyyy"
                                        openTo="year"
                                        views={["year", "month"]}
                                        disableFuture
                                        autoOk
                                        required
                                    />
                                </TabPanel>

                                <TabPanel value={value} index={1}>
                                    <DateInput
                                        variant={'standard'}
                                        margin={'dense'}
                                        color="primary"
                                        disabled={fetching}
                                        type="text"
                                        label={'Desde'}
                                        name="from_month"
                                        onChange={handleChange}
                                        value={state.from_month}
                                        minDate={moment().subtract(30, 'years').format("YYYY/MM/DD")}
                                        maxDate={moment().format("YYYY/MM/DD")}
                                        openTo="year"
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
                                        label={'Hasta'}
                                        name="to_month"
                                        onChange={handleChange}
                                        value={state.to_month}
                                        minDate={moment().subtract(30, 'years').format("YYYY/MM/DD")}
                                        maxDate={moment().format("YYYY/MM/DD")}
                                        openTo="year"
                                        disableFuture
                                        autoOk
                                        required
                                    />
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <DateInput
                                        variant={'standard'}
                                        margin={'dense'}
                                        color="primary"
                                        disabled={fetching}
                                        type="text"
                                        label={'Fecha'}
                                        name="date"
                                        onChange={handleChange}
                                        value={state.date}
                                        minDate={moment().subtract(30, 'years').format("YYYY/MM/DD")}
                                        maxDate={moment().format("YYYY/MM/DD")}
                                        openTo="year"
                                        disableFuture
                                        autoOk
                                        required
                                    />
                                    <TimeInput
                                        variant={'standard'}
                                        margin={'dense'}
                                        color="primary"
                                        disabled={fetching}
                                        type="text"
                                        label={'Iniciar'}
                                        name="from_hour"
                                        value={state.from_hour}
                                        onChange={handleChange}
                                        views={["hours", "minutes"]}
                                        required
                                    />
                                    <TimeInput
                                        variant={'standard'}
                                        margin={'dense'}
                                        color="primary"
                                        disabled={fetching}
                                        type="text"
                                        label={'Finalizar'}
                                        name="to_hour"
                                        value={state.to_hour}
                                        onChange={handleChange}
                                        views={["hours", "minutes"]}
                                        required
                                    />
                                </TabPanel>

                            </SwipeableViews>

                        </Grid>
                    </Grid>
                </CardBody>

                <CardFooter form>
                    <CustomBotton color="transparent" size="sm" type="button" disabled={fetching} onClick={handleEmpty} >
                        Limpiar
                    </CustomBotton>
                    <CustomBotton form="product-report" size="sm" type="submit" disabled={fetching} >
                        Generar
                    </CustomBotton>
                </CardFooter>
            </Card>
        </form>
    );
};
const mapStateToProps = (state) => {
    const { collects, category, subcategory, product } = state;
    return {
        categories: category.payload,
        subcategories: subcategory.payload,
        products: product.payload,
        fetching: collects.fetching,
    }
};

export default connect(mapStateToProps, null)(ProductReport);

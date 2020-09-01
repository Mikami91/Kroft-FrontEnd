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
import DateInput from '../../components/CustomInput/DateInput.js';
import CustomBotton from '../../components/CustomButtons/Button.js'
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomDivider from '../../components/Divider/CustomDivider.js';
import SingleTabs from '../../components/CustomTabs/SingleTabs';
import TabPanel from "../../components/Panel/TabPanel.js";
// Functions
import { collectGlobalReport } from "../../functions/collectFunctions";
// Configs
moment.locale("en");
moment().format('l');

function GlobalReport(props) {
    const { fetching } = props;
    // State for Panel Tabs
    const [value, setValue] = useState(0);
    const handleChangeValue = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const [state, setState] = useState({
        month: null,
        from_month: null,
        to_month: null,
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
            month: null,
            from_month: null,
            to_month: null,
            error: false
        });
    };

    // Report function
    const handleReport = (e) => {
        e.preventDefault();
        collectGlobalReport(state).then((response) => {
            if (typeof response !== 'undefined') {
                if (response.success === true) {
                    handleEmpty();
                }
            }
        });
    };

    return (
        <form id="global-report" onSubmit={handleReport}>

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
                            xs={12}
                            elevation={6}
                            square="true"
                        >
                            <CustomDivider text="Buscar por:" color="warning" margin="normal" bold />

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
                                        minDate={moment().subtract(30, 'years').calendar()}
                                        maxDate={moment().format("MM/DD/YYYY")}
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
                                        minDate={moment().subtract(30, 'years').calendar()}
                                        maxDate={moment().format("MM/DD/YYYY")}
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
                                        minDate={moment().subtract(30, 'years').calendar()}
                                        maxDate={moment().format("MM/DD/YYYY")}
                                        openTo="year"
                                        disableFuture
                                        autoOk
                                        required
                                    />
                                </TabPanel>
                            </SwipeableViews>

                        </Grid>
                    </Grid>
                </CardBody>

                <CardFooter form>
                    <CustomBotton form="global-report" size="sm" type="submit" disabled={state.isUpload} >
                        Generar
                    </CustomBotton>
                </CardFooter>
            </Card>
        </form>
    );
};
const mapStateToProps = (state) => {
    const { collects } = state;
    return {
        fetching: collects.fetching,
    }
};

export default connect(mapStateToProps, null)(GlobalReport);

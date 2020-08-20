// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
// Core Components
import CustomTable from "../../components/Table/CustomTable.js";
import AvatarTable from "../../components/Avatar/AvatarTable";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomModal from '../../components/Modal/CustomModal';
// Layouts
import CustomerAdd from '../Forms/CustomerAdd.js';
import CustomerUpdate from '../../layouts/Forms/CustomerUpdate';
// Functions
import { customerShow, customerDelete } from "../../functions/customerFunctions";
// API
import { API } from '../../API/index';

function Customers({ customers, fetching, loading }) {
    const [state, setState] = useState({
        data: {},
        open: false
    })
    const handleOpen = (rowData) => setState({ data: rowData, open: true });
    const handleClose = () => setState({ data: {}, open: false });
    return (
        <Fragment>
            <Grid
                container
                justify="center"
                alignItems="flex-start"
                spacing={3}
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={5}
                    xl={5}
                    elevation={6}
                    square="true"
                >
                    <CustomerAdd />

                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={7}
                    xl={7}
                    elevation={6}
                    square="true"
                >
                    <Card variant="cardForm">

                        <CustomLoading inside color="primary" open={loading} />

                        <CardHeader color="primary" dense>
                            <h3>Lista de Proveedores</h3>
                        </CardHeader>
                        <CardBody form>
                            <CustomTable
                                column={[
                                    { title: "ID", field: "id", type: "numeric", editable: "never" },
                                    {
                                        title: "Foto", field: "photo", editable: "never", sorting: false,
                                        render: rowData => (
                                            <AvatarTable rowData={rowData} image="photo" alt="id" path={`${API}images/customers/`} />
                                        )
                                    },
                                    { title: "Nombre", field: "first_name", type: "string" },
                                    { title: "Apellidos", field: "last_name", type: "string" },
                                    { title: "Tienda", field: "shop_name", type: "string" },
                                ]}
                                data={customers}
                                detailPanel={[
                                    { title: "Celular", field: "phone", type: "numeric" },
                                    { title: "Correo electrónico", field: "email", type: "string" },
                                    { title: "Dirección", field: "address", type: "string" },
                                    { title: "Ciudad", field: "city", type: "string" },
                                ]}
                                refresh={customerShow}
                                // updates={handleOpen}
                                customUpdate={handleOpen}
                                deletes={customerDelete}
                            // loading={fetching || loading}
                            />
                        </CardBody>
                    </Card>
                </Grid>
            </Grid>

            <CustomModal
                title={{
                    text: "Editar proveedor",
                    size: "medium",
                }}
                loading={fetching}
                open={state.open}
                close={handleClose}
                content={<CustomerUpdate data={state.data} close={handleClose} />}
                rightButtons={[
                    {
                        type: "submit",
                        size: "medium",
                        align: "center",
                        text: "Guardar",
                        color: "primary",
                        variant: "contained",
                        // icon: CheckCircleRoundedIcon,
                        // iconColor: "secondary",
                        html: "customer-update",
                    },
                ]}
                renderRefresh={[state.open, state.data]}
                scroll="paper"
            />

        </Fragment>
    );
};
// PropTypes
Customers.propTypes = {
    container: PropTypes.instanceOf(
        typeof Element === "undefined" ? Object : Element
    ),
};
// Connect to Store State
const mapStateToProps = (state) => {
    const { customer } = state;
    return {
        customers: customer.payload,
        fetching: customer.fetching,
        loading: customer.loading,
    }
};

export default connect(mapStateToProps, null)(Customers);

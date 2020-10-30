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
import EmployeeAdd from '../Forms/EmployeeAdd.js';
import EmployeeUpdate from '../Forms/EmployeeUpdate';
// Functions
import { employeeShow, employeeDelete } from "../../functions/cruds/employeeFunctions";
// API
import { API } from '../../API/index';

function Employees({ employees, fetching, loading }) {
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
                    <EmployeeAdd />

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
                            <h3>Lista de Personal</h3>
                        </CardHeader>
                        <CardBody form>
                            <CustomTable
                                column={[
                                    { title: "ID", field: "id", type: "numeric", editable: "never" },
                                    {
                                        title: "Foto", field: "photo", editable: "never", sorting: false,
                                        render: rowData => (
                                            <AvatarTable rowData={rowData} image="photo" alt="id" path={`${API}images/employees/`} />
                                        )
                                    },
                                    { title: "Nombre", field: "first_name", type: "string" },
                                    { title: "Apellidos", field: "last_name", type: "string" },
                                    { title: "Celular", field: "phone", type: "numeric" },
                                ]}
                                data={employees}
                                detailPanel={[
                                    { title: "Nacimiento", field: "birthdate", type: "string" },
                                    { title: "Genero", field: "gender", type: "bool", options: ["Masculino", "Femenino"] },
                                    { title: "Dirección", field: "address", type: "string" },
                                    { title: "Celular de referencia", field: "reference_phone", type: "string" },
                                    { title: "Fecha de entrada", field: "entry_date", type: "string" },
                                    { title: "Usuario", field: "user", type: "string" },
                                    { title: "Jefe de área", field: "head_area", type: "bool", options: ["No", "Si"] },
                                ]}
                                refresh={employeeShow}
                                // updates={handleOpen}
                                customUpdate={handleOpen}
                                deletes={employeeDelete}
                            // loading={fetching || loading}
                            />
                        </CardBody>
                    </Card>
                </Grid>
            </Grid>

            <CustomModal
                title={{
                    text: "Editar personal",
                    size: "medium",
                }}
                loading={fetching}
                open={state.open}
                close={handleClose}
                content={<EmployeeUpdate data={state.data} close={handleClose} />}
                rightButtons={[
                    {
                        type: "button",
                        size: "medium",
                        align: "center",
                        text: "Cancelar",
                        color: "default",
                        variant: "text",
                        autoAdjust: false,
                        margin: true,
                        onClick: handleClose
                    },
                    {
                        type: "submit",
                        size: "medium",
                        align: "center",
                        text: "Guardar",
                        color: "primary",
                        variant: "contained",
                        // icon: CheckCircleRoundedIcon,
                        // iconColor: "secondary",
                        html: "employee-update",
                    },
                ]}
                renderRefresh={[state.open, state.data]}
                scroll="paper"
            />

        </Fragment>
    );
};
// PropTypes
Employees.propTypes = {
    container: PropTypes.instanceOf(
        typeof Element === "undefined" ? Object : Element
    ),
};
// Connect to Store State
const mapStateToProps = (state) => {
    const { employee } = state;
    return {
        employees: employee.payload,
        fetching: employee.fetching,
        loading: employee.loading,
    }
};

export default connect(mapStateToProps, null)(Employees);

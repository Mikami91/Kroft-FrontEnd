// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
// Core Components
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CustomTable from "../../components/Table/CustomTable.js";
// Layouts
import EmployeeAdd from '../Forms/EmployeeAdd.js';

function Employees(props) {
    return (
        <Fragment>
            <Grid
                container
                //   className={classes.content}
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
                // className={classes.container}
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
                // className={classes.container}
                >
                    <Card variant="cardForm">
                        <CardHeader color="primary" dense>
                            <h3>Lista de Personal</h3>
                        </CardHeader>
                        <CardBody form>
                            <CustomTable
                                column={[
                                    {
                                        title: "ID",
                                        field: "id",
                                        type: "numeric",
                                        editable: "never"
                                    },
                                    {
                                        title: "Imagen",
                                        field: "image",
                                        editable: "never",
                                        sorting: false,
                                        // eslint-disable-next-line react/display-name
                                        //   render: rowData => (
                                        //     <AvatarTable rowData={rowData} path={path} />
                                        //   )
                                    },
                                    { title: "Nombre", field: "name", type: "string" },
                                    { title: "Apellidos", field: "lastname", type: "string" },
                                    { title: "Usuario", field: "user", type: "string" },
                                    { title: "PIN", field: "pin", type: "string" },
                                    //{ title: 'Creación', field: 'created_at', editable: 'never', type: 'date' },
                                    //{ title: 'Modificación', field: 'updated_at', editable: 'never', type: 'date' },
                                    {
                                        title: "Cargo",
                                        field: "position_id",
                                        type: "string",
                                        //   lookup: selectList
                                    },
                                    {
                                        title: "Contraseña",
                                        field: "password_table",
                                        editable: "onUpdate",
                                        type: "string"
                                    }
                                ]}
                            //   data={EmployeesList}
                            //   refresh={userListAction}
                            //   updates={userUpdateAction}
                            //   deletes={userDeleteAction}
                            //   loading={Loading}
                            />
                        </CardBody>
                    </Card>
                </Grid>
            </Grid>


        </Fragment>
    );
};
// PropTypes
Employees.propTypes = {
    container: PropTypes.instanceOf(
        typeof Element === "undefined" ? Object : Element
    ),
};

export default Employees;

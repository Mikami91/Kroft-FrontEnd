// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
// Core Components
import AvatarTable from "../../components/Avatar/AvatarTable.js";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomTable from "../../components/Table/CustomTable.js";
import CustomBotton from '../../components/CustomButtons/Button.js'
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
// Layouts
import SupplierAdd from '../../layouts/Forms/SupplierAdd.js';

const Suppliers = ({ style }) => {
    // TabPanel Swipeables Views
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

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
                    <SupplierAdd />

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
                        <CardHeader color="info" dense>
                            <h3>Lista de Proveedores</h3>
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
                                    { title: "Correo", field: "email", type: "string" },
                                    { title: "Celular", field: "phone", type: "string" },
                                    { title: "Ciudad", field: "city", type: "string" },
                                    { title: "Direccion", field: "address", type: "string" },
                                    { title: "Tienda", field: "shop_name", type: "string" },
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
Suppliers.propTypes = {
    container: PropTypes.instanceOf(
        typeof Element === "undefined" ? Object : Element
    ),
};

export default Suppliers;

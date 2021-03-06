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
import CustomBotton from '../../components/CustomButtons/CustomButton.js'
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
// Layouts
import EmployeeAdd from '../Forms/EmployeeAdd.js';

const Employees = ({ style }) => {
    // TabPanel Swipeables Views
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                    md={4}
                    lg={3}
                    xl={3}
                    elevation={6}
                    square="true"
                // className={classes.container}
                >
                    <Card variant="cardLogin">
                        <CardHeader color="primary" centered dense>
                            <h3>Agregar Personal</h3>
                        </CardHeader>
                        <CardBody form>
                            <EmployeeAdd />
                        </CardBody>
                        <CardFooter form>
                            <CustomBotton form="employee-add" size="sm" type="submit">
                                Registrar
                            </CustomBotton>
                        </CardFooter>
                    </Card>

                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={8}
                    lg={9}
                    xl={9}
                    elevation={6}
                    square="true"
                // className={classes.container}
                >
                    <Card variant="cardLogin">
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

            {/* <PasswordInput
                variant={'standard'}
                margin={'dense'}
                color="primary"
                // disabled={showProgress} 
                label={'Contraseña'}
                name="password"
                onChange={handleChange}
                value={state.password}
            />
            <PasswordInput
                variant={'standard'}
                margin={'dense'}
                color="primary"
                // disabled={showProgress} 
                label={'PIN'}
                name="pin"
                onChange={handleChange}
                value={state.pin}
            /> */}


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

// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
// Core Components
import CustomTable from "../../components/Table/CustomTable.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
// Layouts
import SupplierAdd from "../Forms/SupplierAdd.js";

function Suppliers(props) {
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
            <CardHeader color="primary" dense>
              <h3>Lista de Insumos</h3>
            </CardHeader>
            <CardBody form>
              <CustomTable
                column={[
                  {
                    title: "ID",
                    field: "id",
                    type: "numeric",
                    editable: "never",
                  },
                  {
                    title: "Imagen",
                    field: "image",
                    editable: "never",
                    sorting: false,
                    // render: rowData => (
                    //     <AvatarTable rowData={rowData} path={path} />
                    // )
                  },
                  { title: "Producto", field: "name", type: "string" },
                  { title: "Precio Bs.", field: "price", type: "numeric" },
                  //{ title: 'Cantidad', field: 'quantity', type: 'numeric' },
                  { title: "Codigo", field: "code", type: "string" },
                  {
                    title: "Categoría",
                    field: "category_id",
                    type: "string" /*lookup: selectListCategories*/,
                  },
                  {
                    title: "Subcategoría",
                    field: "subcategory_id",
                    type: "string" /*lookup: selectListSubcategories*/,
                  },
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
}
// PropTypes
Suppliers.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default Suppliers;

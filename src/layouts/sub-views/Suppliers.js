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
import SupplierAdd from '../Forms/SupplierAdd.js';
import SupplierUpdate from '../Forms/SupplierUpdate';
// Functions
import { supplierShow, supplierDelete } from "../../functions/supplierFunctions";
// API
import { API } from '../../API/index';

function Suppliers({ suppliers, fetching, loading }) {
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
        >
          <Card variant="cardForm">

            <CustomLoading inside color="primary" open={loading} />

            <CardHeader color="primary" dense>
              <h3>Lista de Insumos</h3>
            </CardHeader>
            <CardBody form>
              <CustomTable
                column={[
                  { title: "ID", field: "id", type: "numeric", editable: "never" },
                  {
                    title: "Foto", field: "photo", editable: "never", sorting: false,
                    render: rowData => (
                      <AvatarTable rowData={rowData} image="photo" alt="id" path={`${API}images/products/`} square />
                    )
                  },
                  { title: "Insumo", field: "name", type: "string" },
                  { title: "Precio", field: "price", type: "numeric" },
                  { title: "Categoría", field: "category_name", type: "string" },
                  { title: "Subcategoría", field: "sub_category_name", type: "string" },
                  { title: "Impresión", field: "print_category_name", type: "string" },
                  // { title: "Creación", field: "created_at", editable: "never", type: "date", },
                  // { title: "Modificación", field: "updated_at", editable: "never", type: "date", },
                ]}
                data={suppliers}
                detailPanel={[
                  { title: "Cantidad", field: "quantity", type: "numeric" },
                  { title: "Observación", field: "observation", type: "string" },
                  { title: "Precio de compra", field: "buying_price", type: "string" },
                  { title: "Fecha de compra", field: "buying_date", type: "string" },
                  { title: "Fecha de expiración", field: "expire_date", type: "string" },
                  { title: "Código", field: "code", type: "string" },
                ]}
                refresh={supplierShow}
                // updates={handleOpen}
                customUpdate={handleOpen}
                deletes={supplierDelete}
              // loading={fetching || loading}
              />
            </CardBody>
          </Card>
        </Grid>
      </Grid>

      <CustomModal
        title={{
          text: "Editar insumo",
          size: "medium",
        }}
        loading={fetching}
        open={state.open}
        close={handleClose}
        content={<SupplierUpdate data={state.data} close={handleClose} />}
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
            html: "supplier-update",
          },
        ]}
        renderRefresh={[state.open, state.data]}
        scroll="paper"
      />

    </Fragment>
  );
};
// PropTypes
Suppliers.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { supplier } = state;
  return {
    suppliers: supplier.payload,
    fetching: supplier.fetching,
    loading: supplier.loading,
  }
};

export default connect(mapStateToProps, null)(Suppliers);

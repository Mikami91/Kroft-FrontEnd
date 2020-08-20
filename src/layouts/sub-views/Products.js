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
import ProductAdd from "../Forms/ProductAdd.js";
import ProductUpdate from '../Forms/ProductUpdate';
// Functions
import { productShow, productDelete } from "../../functions/productFunctions";
// API
import { API } from '../../API/index';

function Product({ products, fetching, loading }) {
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
          lg={4}
          xl={4}
          elevation={6}
          square="true"
        >
          <ProductAdd />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={8}
          xl={8}
          elevation={6}
          square="true"
        >
          <Card variant="cardForm">

            <CustomLoading inside color="primary" open={loading} />

            <CardHeader color="primary" dense>
              <h3>Lista de Productos</h3>
            </CardHeader>
            <CardBody form>
              <CustomTable
                column={[
                  { title: "ID", field: "id", type: "numeric", editable: "never", },
                  {
                    title: "Foto",
                    field: "Photo",
                    editable: "never",
                    sorting: false,
                    render: rowData => (
                      <AvatarTable rowData={rowData} image="photo" alt="id" path={`${API}images/products/`} />
                    )
                  },
                  { title: "Producto", field: "name", type: "string" },
                  { title: "Precio", field: "price", type: "numeric" },
                  { title: "Categoría", field: "category_name", type: "string" },
                  { title: "Subcategoría", field: "sub_category_name", type: "string" },
                  { title: "Impresión", field: "print_category_name", type: "string" },
                  // { title: "Creación", field: "created_at", editable: "never", type: "date", },
                  // { title: "Modificación", field: "updated_at", editable: "never", type: "date", },
                ]}
                data={products}
                refresh={productShow}
                customUpdate={handleOpen}
                deletes={productDelete}
              />
            </CardBody>
          </Card>
        </Grid>
      </Grid>

      <CustomModal
        title={{
          text: "Editar producto",
          size: "medium",
        }}
        loading={fetching}
        open={state.open}
        close={handleClose}
        content={<ProductUpdate data={state.data} close={handleClose} />}
        rightButtons={[
          {
            type: "submit",
            size: "medium",
            align: "center",
            text: "Guardar",
            color: "primary",
            variant: "contained",
            html: "product-update",
          },
        ]}
        renderRefresh={[state.open, state.data]}
        scroll="paper"
      />

    </Fragment>
  );
}
// PropTypes
Product.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { product } = state;
  return {
    products: product.payload,
    fetching: product.fetching,
    loading: product.loading,
  }
};

export default connect(mapStateToProps, null)(Product);

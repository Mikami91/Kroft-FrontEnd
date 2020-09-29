// Dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
// Core Components
import CustomTable from "../../components/Table/CustomTable.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CustomLoading from '../../components/Loading/CustomLoading.js';
// Layouts
import ProductReport from "../Forms/ProductReport";

function ProductReports({ data, fetching, loading }) {
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
          md={4}
          lg={3}
          xl={3}
          elevation={6}
          square="true"
        >
          <ProductReport />
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
        >
          <Card variant="cardForm">

            <CustomLoading inside color="primary" open={fetching} />

            <CardHeader color="primary" dense>
              <h3>Lista de Reportes</h3>
            </CardHeader>
            <CardBody form>
              <CustomTable
                column={[
                  { title: "ID", field: "id", type: "numeric", editable: "never", },
                  { title: "Producto", field: "product_name", type: "string" },
                  { title: "Precio", field: "product_price", type: "numeric" },
                  { title: "Cantidad", field: "product_quantity", type: "numeric" },
                  { title: "Creación", field: "created_at", editable: "never", type: "date", },
                  { title: "Modificación", field: "updated_at", editable: "never", type: "date", },
                ]}
                detailPanel={[
                  // { title: "Ambiente", field: "environment_name", type: "string" },
                  // { title: "Mesa", field: "table_number", type: "string" },
                  // { title: "Mesero", field: "waiter_first_name", type: "string" },
                  // { title: "Cajero", field: "cashier_first_name", type: "string" },
                  { title: "Caja", field: "box_name", type: "string" },
                  { title: "Monto", field: "amount", type: "string" },
                  { title: "Pago", field: "payment_name", type: "string" },
                  { title: "Fecha", field: "created_at", type: "date" },
                ]}
                data={data}
              />
            </CardBody>
          </Card>
        </Grid>
      </Grid>

    </Fragment>
  );
}
// PropTypes
ProductReports.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { collects } = state;
  return {
    data: collects.product,
    fetching: collects.fetching,
    loading: collects.loading,
  }
};

export default connect(mapStateToProps, null)(ProductReports);
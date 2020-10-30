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
// Functions
import { paymentCreate, paymentShow, paymentUpdate, paymentDelete } from "../../functions/cruds/paymentFunctions";

function Payments({ data, fetching, loading }) {
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
          md={8}
          lg={9}
          xl={9}
          elevation={6}
          square="true"
        >
          <Card variant="cardForm">

            <CustomLoading inside color="primary" open={loading || fetching} />

            <CardHeader color="primary" dense>
              <h3>Tipos de Pago</h3>
            </CardHeader>
            <CardBody form>
              <CustomTable
                column={[
                  { title: "ID", field: "id", type: "numeric", editable: "never", },
                  { title: "Pago", field: "name", type: "string" }
                ]}
                data={data}
                add={paymentCreate}
                refresh={paymentShow}
                updates={paymentUpdate}
                deletes={paymentDelete}
              />
            </CardBody>
          </Card>
        </Grid>
      </Grid>

    </Fragment>
  );
}
// PropTypes
Payments.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { payments } = state;
  return {
    data: payments.payload,
    fetching: payments.fetching,
    loading: payments.loading,
  }
};

export default connect(mapStateToProps, null)(Payments);
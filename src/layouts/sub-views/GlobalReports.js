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
import GlobalReport from "../Forms/GlobalReport";
import EnvironmentUpdate from '../Forms/EnvironmentUpdate';
// Functions
import { environmentShow, environmentDelete } from "../../functions/environmentFunctions";
// API
import { API } from '../../API/index';

function GlobalReports({ data, fetching, loading }) {
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
          <GlobalReport />
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
          <Card variant="cardForm">

            <CustomLoading inside color="primary" open={fetching} />

            <CardHeader color="primary" dense>
              <h3>Lista de Reportes</h3>
            </CardHeader>
            <CardBody form>
              <CustomTable
                column={[
                  { title: "ID", field: "id", type: "numeric", editable: "never", },
                  { title: "Monto", field: "total_amount", type: "numeric" },
                  { title: "Creación", field: "created_at", editable: "never", type: "date", },
                  { title: "Modificación", field: "updated_at", editable: "never", type: "date", },
                ]}
                detailPanel={[
                  { title: "Ambiente", field: "environment_name", type: "string" },
                  { title: "Mesa", field: "table_number", type: "string" },
                  { title: "Mesero", field: "waiter_first_name", type: "string" },
                  { title: "Cajero", field: "cashier_first_name", type: "string" },
                  { title: "Caja", field: "box_name", type: "string" },
                  { title: "Pago", field: "payment_name", type: "string" },
                ]}
                data={data}
                refresh={environmentShow}
                customUpdate={handleOpen}
                deletes={environmentDelete}
              />
            </CardBody>
          </Card>
        </Grid>
      </Grid>

      <CustomModal
        title={{
          text: "Editar ambiente",
          size: "medium",
        }}
        loading={fetching}
        open={state.open}
        close={handleClose}
        content={<EnvironmentUpdate data={state.data} close={handleClose} />}
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
            html: "environment-update",
          },
        ]}
        renderRefresh={[state.open, state.data]}
        scroll="paper"
      />

    </Fragment>
  );
}
// PropTypes
GlobalReports.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { collects } = state;
  return {
    data: collects.global,
    fetching: collects.fetching,
    loading: collects.loading,
  }
};

export default connect(mapStateToProps, null)(GlobalReports);
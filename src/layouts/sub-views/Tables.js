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
import TableAdd from "../Forms/TableAdd.js";
import TableUpdate from '../Forms/TableUpdate';
// Functions
import { tableShow, tableDelete } from "../../functions/tableFunctions";
// API
import { API } from '../../API/index';

function Tables({ tables, fetching, loading }) {
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
          <TableAdd />
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
              <h3>Lista de Mesas</h3>
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
                      <AvatarTable rowData={rowData} image="photo" alt="id" path={`${API}images/tables/`} />
                    )
                  },
                  { title: "Mesa", field: "name", type: "string" },
                  { title: "Número", field: "number", type: "numeric" },
                  { title: "Ambiente", field: "environment_name", type: "string" },
                  // { title: "Creación", field: "created_at", editable: "never", type: "date", },
                  // { title: "Modificación", field: "updated_at", editable: "never", type: "date", },
                ]}
                data={tables}
                refresh={tableShow}
                customUpdate={handleOpen}
                deletes={tableDelete}
              />
            </CardBody>
          </Card>
        </Grid>
      </Grid>

      <CustomModal
        title={{
          text: "Editar mesa",
          size: "medium",
        }}
        loading={fetching}
        open={state.open}
        close={handleClose}
        content={<TableUpdate data={state.data} close={handleClose} />}
        rightButtons={[
          {
            type: "submit",
            size: "medium",
            align: "center",
            text: "Guardar",
            color: "primary",
            variant: "contained",
            html: "table-update",
          },
        ]}
        renderRefresh={[state.open, state.data]}
        scroll="paper"
      />

    </Fragment>
  );
}
// PropTypes
Tables.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { table } = state;
  return {
    tables: table.payload,
    fetching: table.fetching,
    loading: table.loading,
  }
};

export default connect(mapStateToProps, null)(Tables);

// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
// Core Components
import CustomTable from "../../components/Table/CustomTable.js";
import AvatarTable from "../../components/Avatar/AvatarTable";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CustomLoading from "../../components/Loading/CustomLoading.js";
import CustomModal from "../../components/Modal/CustomModal";
import SingleTabs from "../../components/CustomTabs/SingleTabs";
import TabPanel from "../../components/Panel/TabPanel.js";
// Layouts
import NewSupplierAdd from "../Forms/NewSupplierAdd";
import ExistSupplierAdd from "../Forms/ExistSupplierAdd";
import SupplierUpdate from "../Forms/SupplierUpdate";
// Functions
import {
  supplierShow,
  supplierDelete,
} from "../../functions/cruds/supplierFunctions";
// API
import { API } from "../../API/index";

function Suppliers({ suppliers, fetching, loading }) {
  // State for Panel Tabs
  const [value, setValue] = useState(0);
  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [state, setState] = useState({
    data: {},
    open: false,
  });
  const handleOpen = (rowData) => setState({ data: rowData, open: true });
  const handleClose = () => setState({ data: {}, open: false });
  return (
    <Fragment>
      <Grid container justify="center" alignItems="flex-start" spacing={3}>
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
          <Card variant="cardForm">
            <CustomLoading inside color="primary" open={fetching} />

            <CardHeader color="primary" dense centered>
              <h3>Insumo</h3>
            </CardHeader>

            <SingleTabs
              centered
              value={value}
              onChange={handleChangeValue}
              plainTabs
              headerColor="primary"
              tabs={[
                {
                  tabName: "Nuevo",
                },
                {
                  tabName: "Existente",
                },
              ]}
            />

            <SwipeableViews
              axis="x"
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} centered>
                <NewSupplierAdd />
              </TabPanel>

              <TabPanel value={value} index={1} centered>
                <ExistSupplierAdd />
              </TabPanel>
            </SwipeableViews>
          </Card>
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
                  {
                    title: "ID",
                    field: "id",
                    type: "numeric",
                    editable: "never",
                  },
                  // {
                  //   title: "Foto", field: "photo", editable: "never", sorting: false,
                  //   render: rowData => (
                  //     <AvatarTable rowData={rowData} image="photo" alt="id" path={`${API}images/products/`} square />
                  //   )
                  // },
                  { title: "Insumo", field: "name", type: "string" },
                  {
                    title: "Ud.",
                    field: "unit_type",
                    type: "string",
                    editable: "never",
                  },
                  {
                    title: "Presentación",
                    field: "presentation",
                    type: "numeric",
                  },
                  { title: "Cantidad", field: "quantity", type: "numeric" },
                  {
                    title: "P./U.",
                    field: "buying_price",
                    type: "currency",
                    currencySetting: {
                      locale: "es-BO",
                      currencyCode: "BOB",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    },
                  },
                ]}
                data={suppliers}
                detailPanel={[
                  {
                    title: "Observación",
                    field: "observation",
                    type: "string",
                  },
                  {
                    title: "Fecha de compra",
                    field: "buying_date",
                    type: "date",
                  },
                  {
                    title: "Fecha de expiración",
                    field: "expire_date",
                    type: "date",
                  },
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
            onClick: handleClose,
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
}
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
  };
};

export default connect(mapStateToProps, null)(Suppliers);

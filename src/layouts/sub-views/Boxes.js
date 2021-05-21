// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Core Components
import CustomTable from "../../components/Table/CustomTable.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CustomModal from "../../components/Modal/CustomModal";
import CustomLoading from "../../components/Loading/CustomLoading.js";
import CustomMoneyInput from "../../components/CustomInput/CustomMoneyInput.js";
// Functions
import {
  boxCreate,
  boxShow,
  boxExtract,
  boxUpdate,
  boxDelete,
} from "../../functions/cruds/boxFunctions";

function Boxes({ data, fetching, loading }) {
  const [state, setState] = useState({
    data: {
      total_amount: 0.0,
    },
    open: false,
  });
  const handleOpen = (rowData) =>
    setState({ ...state, data: rowData, open: true });
  const handleClose = () => setState({ data: {}, open: false });

  const handleBoxExtract = async (rowData) => {
    boxExtract(rowData).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          handleClose();
        }
      }
    });
  };
  return (
    <Fragment>
      <Grid container justify="center" alignItems="flex-start" spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={10}
          xl={10}
          elevation={6}
          square="true"
        >
          <Card variant="cardForm">
            <CustomLoading inside color="primary" open={loading || fetching} />

            <CardHeader color="primary" dense>
              <h3>Cajas</h3>
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
                  { title: "Caja", field: "name", type: "string" },
                  {
                    title: "Monto Inicial",
                    field: "initial_amount",
                    type: "currency",
                    currencySetting: {
                      locale: "es-BO",
                      currencyCode: "BOB",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    },
                    editComponent: (props) => (
                      <NumberFormat
                        displayType={"input"}
                        value={props.value}
                        onValueChange={(e) => props.onChange(e.value)}
                        thousandSeparator={true}
                        allowNegative={false}
                        allowEmptyFormatting={false}
                        allowLeadingZeros={true}
                        decimalScale={2}
                        isNumericString={false}
                        prefix="Bs "
                        customInput={CustomMoneyInput}
                      />
                    ),
                  },
                  {
                    title: "Ingresos",
                    field: "income_amount",
                    type: "currency",
                    currencySetting: {
                      locale: "es-BO",
                      currencyCode: "BOB",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    },
                    editable: "never",
                  },
                  {
                    title: "Cambios",
                    field: "change_amount",
                    type: "currency",
                    currencySetting: {
                      locale: "es-BO",
                      currencyCode: "BOB",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    },
                    editable: "never",
                    editComponent: (props) => (
                      <NumberFormat
                        displayType={"input"}
                        value={props.value}
                        onValueChange={(e) => props.onChange(e.value)}
                        thousandSeparator={true}
                        allowNegative={false}
                        allowEmptyFormatting={false}
                        allowLeadingZeros={true}
                        decimalScale={2}
                        isNumericString={false}
                        prefix="Bs "
                        customInput={CustomMoneyInput}
                      />
                    ),
                  },
                  {
                    title: "Ingresos Totales",
                    field: "total_income_amount",
                    type: "currency",
                    currencySetting: {
                      locale: "es-BO",
                      currencyCode: "BOB",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    },
                    editable: "never",
                  },
                  {
                    title: "Monto Total",
                    field: "total_amount",
                    type: "currency",
                    currencySetting: {
                      locale: "es-BO",
                      currencyCode: "BOB",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    },
                    editable: "never",
                    editComponent: (props) => (
                      <NumberFormat
                        displayType={"input"}
                        value={props.value}
                        onValueChange={(e) => props.onChange(e.value)}
                        thousandSeparator={true}
                        allowNegative={false}
                        allowEmptyFormatting={false}
                        allowLeadingZeros={true}
                        decimalScale={2}
                        isNumericString={false}
                        prefix="Bs "
                        customInput={CustomMoneyInput}
                      />
                    ),
                  },
                ]}
                data={data}
                add={boxCreate}
                refresh={boxShow}
                updates={boxUpdate}
                onExtract={handleOpen}
                // deletes={boxDelete}
              />
            </CardBody>
          </Card>
        </Grid>
      </Grid>
      <CustomModal
        title={{
          text: "Extraer Monto Total",
          size: "medium",
        }}
        loading={fetching || loading}
        open={state.open}
        close={handleClose}
        closeIcon={fetching || loading ? false : true}
        leftButtons={[
          {
            type: "text",
            text: (
              <NumberFormat
                value={state.data.total_amount}
                displayType={"text"}
                thousandSeparator={true}
                allowNegative={false}
                allowEmptyFormatting={false}
                allowLeadingZeros={false}
                decimalScale={2}
                fixedDecimalScale={true}
                isNumericString={true}
                renderText={(value) => <span>Bs. {value}</span>}
              />
            ),
            size: "default",
            align: "right",
            margin: true,
            color: "warning",
            display: "inline",
            bold: true,
          },
        ]}
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
            type: "button",
            size: "medium",
            align: "center",
            text: "Extraer",
            color: "primary",
            variant: "contained",
            onClick: () => handleBoxExtract(state.data),
          },
        ]}
        renderRefresh={[state.data, fetching, loading]}
        maxWidth="xs"
        fullWidth
        scroll="paper"
      />
    </Fragment>
  );
}
// PropTypes
Boxes.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { boxes } = state;
  return {
    data: boxes.payload,
    fetching: boxes.fetching,
    loading: boxes.loading,
  };
};

export default connect(mapStateToProps, null)(Boxes);

// Dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
// Core Components
import CustomTable from "../../components/Table/CustomTable.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CustomLoading from "../../components/Loading/CustomLoading.js";
import CustomMoneyInput from "../../components/CustomInput/CustomMoneyInput.js";
// Functions
import {
  boxShow,
} from "../../functions/cruds/boxFunctions";

function OpeningBoxes({ data, fetching, loading }) {
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
              <h3>Cajas Abiertas</h3>
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
                refresh={boxShow}
              />
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
// PropTypes
OpeningBoxes.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { boxes } = state;
  return {
    data: boxes.payload.filter((i) => i.is_open === 1),
    fetching: boxes.fetching,
    loading: boxes.loading,
  };
};

export default connect(mapStateToProps, null)(OpeningBoxes);

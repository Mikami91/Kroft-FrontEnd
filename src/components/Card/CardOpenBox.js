import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import CustomText from "../../components/Typography/CustomText";
import CustomDivider from "../../components/Divider/CustomDivider.js";

export default function CardOpenBox(props) {
  // Props
  const { data, keyValue, filter, amount, change, income } = props;
  const {
    initial_amount,
    bs_income_amount,
    us_income_amount,
    cards_income_amount,
    will_pay_income_amount,
  } = data;
  // Variables
  let total_incomes =
    us_income_amount * 6.94 +
    bs_income_amount +
    cards_income_amount +
    will_pay_income_amount;
  let total_amount = initial_amount + total_incomes;

  return (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      <CustomDivider text="MONTO INICIAL:" color="white" margin="middle" bold />
      <Grid item xs={12}>
        <NumberFormat
          value={initial_amount}
          displayType={"text"}
          thousandSeparator={true}
          allowNegative={false}
          allowEmptyFormatting={true}
          allowLeadingZeros={true}
          decimalScale={2}
          isNumericString={true}
          fixedDecimalScale={initial_amount !== undefined ? true : false}
          renderText={(value) => (
            <CustomText text={`Bs ${value}`} color="warning" />
          )}
        />
      </Grid>
      <CustomDivider text="INGRESOS:" color="white" margin="middle" bold />
      <Grid item xs={12}>
        <NumberFormat
          value={bs_income_amount}
          displayType={"text"}
          thousandSeparator={true}
          allowNegative={false}
          allowEmptyFormatting={true}
          allowLeadingZeros={true}
          decimalScale={2}
          isNumericString={true}
          fixedDecimalScale={bs_income_amount !== undefined ? true : false}
          renderText={(value) => (
            <Fragment>
              <CustomText text="Monto Bolivianos:" color="gray" />
              <CustomText text={` Bs ${value}`} color="warning" />
            </Fragment>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <NumberFormat
          value={us_income_amount}
          displayType={"text"}
          thousandSeparator={true}
          allowNegative={false}
          allowEmptyFormatting={true}
          allowLeadingZeros={true}
          decimalScale={2}
          isNumericString={true}
          fixedDecimalScale={bs_income_amount !== undefined ? true : false}
          renderText={(value) => (
            <Fragment>
              <CustomText text="Monto Dolares:" color="gray" />
              <CustomText text={` $ ${value}`} color="warning" />
            </Fragment>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <NumberFormat
          value={cards_income_amount}
          displayType={"text"}
          thousandSeparator={true}
          allowNegative={false}
          allowEmptyFormatting={true}
          allowLeadingZeros={true}
          decimalScale={2}
          isNumericString={true}
          fixedDecimalScale={bs_income_amount !== undefined ? true : false}
          renderText={(value) => (
            <Fragment>
              <CustomText text="Monto Tarjetas:" color="gray" />
              <CustomText text={` Bs ${value}`} color="warning" />
            </Fragment>
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <NumberFormat
          value={will_pay_income_amount}
          displayType={"text"}
          thousandSeparator={true}
          allowNegative={false}
          allowEmptyFormatting={true}
          allowLeadingZeros={true}
          decimalScale={2}
          isNumericString={true}
          fixedDecimalScale={bs_income_amount !== undefined ? true : false}
          renderText={(value) => (
            <Fragment>
              <CustomText text="Monto Pagarés:" color="gray" />
              <CustomText text={` Bs ${value}`} color="warning" />
            </Fragment>
          )}
        />
      </Grid>
      <CustomDivider
        text="TOTAL INGRESOS:"
        color="white"
        margin="middle"
        bold
      />
      <Grid item xs={12}>
        <NumberFormat
          value={total_incomes}
          displayType={"text"}
          thousandSeparator={true}
          allowNegative={false}
          allowEmptyFormatting={true}
          allowLeadingZeros={true}
          decimalScale={2}
          isNumericString={true}
          fixedDecimalScale={total_incomes !== undefined ? true : false}
          renderText={(value) => (
            <CustomText text={`Bs ${value}`} color="warning" />
          )}
        />
      </Grid>
      <CustomDivider text="MONTO TOTAL:" color="white" margin="middle" bold />
      <Grid item xs={12}>
        <NumberFormat
          value={total_amount}
          displayType={"text"}
          thousandSeparator={true}
          allowNegative={false}
          allowEmptyFormatting={true}
          allowLeadingZeros={true}
          decimalScale={2}
          isNumericString={true}
          fixedDecimalScale={total_amount !== undefined ? true : false}
          renderText={(value) => (
            <CustomText text={`Bs ${value}`} color="warning" />
          )}
        />
      </Grid>
    </Grid>
  );
}
// PropTypes
CardOpenBox.defaultProps = {
  data: {},
};
CardOpenBox.propTypes = {
  data: PropTypes.object,
};

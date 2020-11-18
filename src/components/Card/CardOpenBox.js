import React, { Fragment } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// core components
import CustomText from "../../components/Typography/CustomText";
import CustomDivider from "../../components/Divider/CustomDivider.js";
import styles from "../../styles/components/cardPriceStyle.js";

const useStyles = makeStyles(styles);

export default function CardOpenBox(props) {
  // Props
  const { data, keyValue, filter, amount, change, income } = props;
  const {
    bs_income_amount,
    us_income_amount,
    cards_income_amount,
    will_pay_income_amount,
  } = data;
  // Styles
  const classes = useStyles();
  const cardIconClasses = classNames({
    // [classes.cardPrice]: true,
    // [classes[color + "Color"]]: color,
  });

  return (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      <CustomDivider text="MONTO INICIAL:" color="white" margin="middle" bold />
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
          renderText={(value) => (
            <Fragment>
              <CustomText text="Monto Pagarés:" color="gray" />
              <CustomText text={` Bs ${value}`} color="warning" />
            </Fragment>
          )}
        />
      </Grid>
      <CustomDivider text="MONTO TOTAL:" color="white" margin="middle" bold />
      <Grid item xs={12}>
        <NumberFormat
          value={
            us_income_amount * 6.94 +
            bs_income_amount +
            cards_income_amount +
            will_pay_income_amount
          }
          displayType={"text"}
          thousandSeparator={true}
          allowNegative={false}
          allowEmptyFormatting={true}
          allowLeadingZeros={true}
          decimalScale={2}
          isNumericString={true}
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

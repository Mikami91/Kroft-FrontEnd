// Dependencies
import React, { useContext } from "react";
import NumberFormat from "react-number-format";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import CustomMoneyInput from "../../../../components/CustomInput/CustomMoneyInput.js";
// Contexts
import CurrentTableContext from "../../../../hooks/contexts/TableContext";

function BSInput(props) {
  return <CustomMoneyInput adornment="Bs" size="medium" {...props} />;
}

function USInput(props) {
  return (
    <CustomMoneyInput
      adornment="$"
      helperText="Cambio Bs 6.94"
      size="medium"
      {...props}
    />
  );
}

function CreditCardInput(props) {
  return (
    <CustomMoneyInput helperText="Numero de tarjeta" size="medium" {...props} />
  );
}

function CashCreditCard(props) {
  const { fetching } = props;

  // Use Contexts
  const { state, changeBs, changeUs, changeCard1 } = useContext(
    CurrentTableContext
  );

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12}>
        <NumberFormat
          value={state.bs_amount === 0 ? "" : state.bs_amount}
          onValueChange={changeBs}
          displayType={"input"}
          thousandSeparator={true}
          allowNegative={false}
          allowEmptyFormatting={false}
          allowLeadingZeros={true}
          decimalScale={2}
          isNumericString={true}
          customInput={BSInput}
          disabled={fetching}
        />
      </Grid>
      <Grid item xs={12}>
        <NumberFormat
          value={state.us_amount === 0 ? "" : state.us_amount}
          onValueChange={changeUs}
          displayType={"input"}
          thousandSeparator={true}
          allowNegative={false}
          allowEmptyFormatting={false}
          allowLeadingZeros={false}
          decimalScale={0}
          isNumericString={true}
          customInput={USInput}
          disabled={fetching}
        />
      </Grid>
      <Grid item xs={12}>
        <NumberFormat
          value={state.credit_card1_number}
          onValueChange={changeCard1}
          displayType={"input"}
          thousandSeparator={false}
          allowNegative={false}
          allowEmptyFormatting={false}
          allowLeadingZeros={false}
          decimalScale={0}
          isNumericString={true}
          format="#### #### #### ####"
          mask="_"
          customInput={CreditCardInput}
          disabled={fetching}
        />
      </Grid>
    </Grid>
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { collects } = state;
  return {
    fetching: collects.fetching,
  };
};

export default connect(mapStateToProps, null)(CashCreditCard);

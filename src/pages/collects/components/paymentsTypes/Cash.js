// Dependencies
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import React, { useContext } from "react";
import NumberFormat from "react-number-format";
// Conecction to Store
import { connect } from "react-redux";
// core components
import CustomMoneyInput from "../../../../components/CustomInput/CustomMoneyInput.js";
// Contexts
import CurrentTableContext from "../../../../hooks/contexts/TableContext";

function Cash(props) {
  const { fetching } = props;

  // Use Contexts
  const { state, changeBs, changeUs } = useContext(CurrentTableContext);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12}>
        <NumberFormat
          value={state.bs_amount === 0 ? "" : state.bs_amount}
          onValueChange={changeBs}
          displayType={"input"}
          thousandSeparator={true}
          allowNegative={false}
          allowEmptyFormatting={true}
          allowLeadingZeros={true}
          decimalScale={2}
          isNumericString={true}
          disabled={fetching}
          // Input props
          adornment="Bs"
          size="medium"
          customInput={CustomMoneyInput}
        />
      </Grid>
      <Grid item xs={12}>
        <NumberFormat
          value={state.us_amount === 0 ? "" : state.us_amount}
          onValueChange={changeUs}
          displayType={"input"}
          thousandSeparator={true}
          allowNegative={false}
          allowEmptyFormatting={true}
          allowLeadingZeros={false}
          decimalScale={0}
          isNumericString={true}
          disabled={fetching}
          // Input props
          adornment="$"
          helperText="Cambio Bs 6.94"
          size="medium"
          customInput={CustomMoneyInput}
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

export default connect(mapStateToProps, null)(Cash);

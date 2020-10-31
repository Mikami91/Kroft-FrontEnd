// Dependencies
import React from "react";
import NumberFormat from "react-number-format";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import CustomMoneyInput from "../../../../components/CustomInput/CustomMoneyInput.js";
// Contexts
import CurrentTableContext from "../../../../hooks/contexts/TableContext";

function CreditCardPayment(props) {
  // Props
  const {
    // Redux
    fetching,
  } = props;

  // Use Contexts
  const { state, changeCard } = React.useContext(CurrentTableContext);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <NumberFormat
          value={state.card_number}
          onValueChange={changeCard}
          displayType={"input"}
          thousandSeparator={false}
          allowNegative={false}
          allowEmptyFormatting={false}
          allowLeadingZeros={false}
          decimalScale={0}
          isNumericString={true}
          format="#### #### #### ####"
          mask="_"
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

export default connect(mapStateToProps, null)(CreditCardPayment);

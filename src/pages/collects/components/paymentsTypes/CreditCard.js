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

function CreditCard(props) {
  // Props
  const {
    // Redux
    fetching,
  } = props;

  // Use Contexts
  const { state, changeCard1 } = useContext(CurrentTableContext);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12}>
        <NumberFormat
          name="credit_card1_number"
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
          disabled={fetching}
          // Input props
          helperText="Numero de tarjeta"
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

export default connect(mapStateToProps, null)(CreditCard);

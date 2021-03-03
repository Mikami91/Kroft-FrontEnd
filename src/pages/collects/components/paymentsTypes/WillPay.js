// Dependencies
import React, { useContext } from "react";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import IconInput from "../../../../components/CustomInput/IconInput.js";
import NumberInput from "../../../../components/CustomInput/NumberInput.js";
// Contexts
import CurrentTableContext from "../../../../hooks/contexts/TableContext";

function WillPay(props) {
  const { fetching } = props;

  // Use Contexts
  const { state, changeWillPay } = useContext(CurrentTableContext);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12}>
        <IconInput
          variant={"standard"}
          margin={"dense"}
          color="primary"
          disabled={fetching}
          type="text"
          label={"Nombre de la empresa"}
          name="company_name"
          onChange={changeWillPay}
          value={state.company_name}
          full
          required
        />
      </Grid>
      <Grid item xs={12}>
        <NumberInput
          variant={"standard"}
          margin={"dense"}
          color="primary"
          disabled={fetching}
          label={"NIT"}
          name="nit"
          value={state.nit}
          onChange={changeWillPay}
          maxLength={16}
          required
          phone
        />
      </Grid>
      <Grid item xs={12}>
        <IconInput
          variant={"standard"}
          margin={"dense"}
          color="primary"
          disabled={fetching}
          type="text"
          label={"Responsable"}
          name="responsable"
          onChange={changeWillPay}
          value={state.responsable}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <NumberInput
          variant={"standard"}
          margin={"dense"}
          color="primary"
          disabled={fetching}
          label={"Cédula de identidad"}
          name="ci"
          value={state.ci}
          onChange={changeWillPay}
          maxLength={9}
          required
          phone
        />
      </Grid>
      <Grid item xs={12}>
        <NumberInput
          variant={"standard"}
          margin={"dense"}
          color="primary"
          disabled={fetching}
          label={"Celular de referencia"}
          name="phone"
          value={state.phone}
          onChange={changeWillPay}
          maxLength={9}
          required
          phone
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

export default connect(mapStateToProps, null)(WillPay);

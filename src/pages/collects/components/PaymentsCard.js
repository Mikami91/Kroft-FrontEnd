// Dependencies
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import moment from "moment";
import "moment/locale/es";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import CardBody from "../../../components/Card/CardBody.js";
import SingleTabs from "../../../components/CustomTabs/SingleTabs";
import TabPanel from "../../../components/Panel/TabPanel.js";
// Local components
import CashPayment from "./paymentsTypes/CashPayment";
import CreditCardPayment from "./paymentsTypes/CreditCardPayment";
// Icons
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
// Configs
moment.locale("es");
moment().format("l");

function PaymentsCard(props) {
  const { fetching } = props;
  // State for Panel Tabs
  const [value, setValue] = useState(0);
  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
    // setState({
    //   ...state,
    //   type: newValue === 0 ? "cash" : newValue === 1 ? "card" : "cash_card",
    // });
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <CardBody form>
      <Grid container justify="center" alignItems="flex-start" spacing={2}>
        <Grid item xs={12} elevation={6} square="true">
          <SingleTabs
            centered
            value={value}
            onChange={handleChangeValue}
            // plainTabs
            headerColor="primary"
            tabs={[
              {
                tabName: "Efectivo",
                tabIcon: AttachMoneyRoundedIcon,
              },
              {
                tabName: "Tarjeta",
                tabIcon: CreditCardRoundedIcon,
              },
              {
                tabName: "Efectivo y Tarjeta",
              },
            ]}
          />

          <SwipeableViews
            axis="x"
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} centered>
              <CashPayment />
            </TabPanel>

            <TabPanel value={value} index={1}>
              <CreditCardPayment />
            </TabPanel>

            <TabPanel value={value} index={2}>
              {"Cash & Card"}
            </TabPanel>
          </SwipeableViews>
        </Grid>
      </Grid>
    </CardBody>
  );
}
const mapStateToProps = (state) => {
  const { collects } = state;
  return {
    fetching: collects.fetching,
  };
};

export default connect(mapStateToProps, null)(PaymentsCard);

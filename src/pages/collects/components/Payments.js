// Dependencies
import React, { useContext } from "react";
import SwipeableViews from "react-swipeable-views";
import moment from "moment";
import "moment/locale/es";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
// core components
import CardBody from "../../../components/Card/CardBody.js";
import PaymentsTabs from "../../../components/CustomTabs/PaymentsTabs";
import TabPanel from "../../../components/Panel/TabPanel.js";
// Contexts
import CurrentTableContext from "../../../hooks/contexts/TableContext";
// Local components
import Cash from "./paymentsTypes/Cash";
import CreditCard from "./paymentsTypes/CreditCard";
import CashCreditCard from "./paymentsTypes/CashCreditCard";
import VariousCreditCard from "./paymentsTypes/VariousCreditCard";
import WillPay from "./paymentsTypes/WillPay";
// Icons
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
// Configs
moment.locale("es");
moment().format("l");

function Payments(props) {
  const {
    // Redux
    paymentsTypes,
    //Props
    value,
    setValue,
  } = props;
  // Use Contexts
  const { changePaymentType } = useContext(CurrentTableContext);
  // State for Panel Tabs
  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
    changePaymentType(
      newValue === 0
        ? ["cash", 1]
        : newValue === 1
        ? ["card", 2]
        : newValue === 2
        ? ["cash_card", 3]
        : newValue === 3
        ? ["various_cards", 4]
        : newValue === 4
        ? ["will_pay", 5]
        : null
    );
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <CardBody form>
      <Grid container justify="center" alignItems="flex-start" spacing={2}>
        <Grid item xs={12} elevation={6} square="true">
          <PaymentsTabs
            centered
            value={value}
            onChange={handleChangeValue}
            headerColor="primary"
            tabs={paymentsTypes}
            tabText="name"
          />

          <SwipeableViews
            axis="x"
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} centered>
              <Cash />
            </TabPanel>

            <TabPanel value={value} index={1}>
              <CreditCard />
            </TabPanel>

            <TabPanel value={value} index={2}>
              <CashCreditCard />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <VariousCreditCard />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <WillPay />
            </TabPanel>
          </SwipeableViews>
        </Grid>
      </Grid>
    </CardBody>
  );
}
const mapStateToProps = (state) => {
  const { payments } = state;
  return {
    paymentsTypes: payments.payload,
  };
};

export default connect(mapStateToProps, null)(Payments);

// Dependencies
import React from "react";
import NumberFormat from "react-number-format";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
// core components
import CustomModal from "../../../components/Modal/CustomModal.js";
// Local components
import PaymentsCard from "./PaymentsCard";
// Functions
import { collectCreate } from "../../../functions/cruds/collectFunctions";

function ModalAmountToPay(props) {
  // Props
  const {
    // Local
    open,
    close,
    state,
    emptyState,
    // Redux
    collect_fetching,
  } = props;

  const handleCloseTotalAmount = () => {
    emptyState();
    close();
  };

  // Send Order function
  const handleMakeCollected = (e) => {
    e.preventDefault();
    collectCreate({
      table_id: state.id,
      order_id: state.order_id,
      cashier_id: 1,
      box_id: localStorage.getItem("box_id"),
      payment_id: 1,
      amount: state.amount,
      currency: "bs",
    }).then((response) => {
      console.log(response);
      if (typeof response !== "undefined") {
        if (response.success === true) {
          handleCloseTotalAmount();
        }
      }
    });
  };

  return (
    <CustomModal
      open={open}
      close={close}
      closeIcon={collect_fetching === true ? false : true}
      title={{
        text: "Total:",
        margin: true,
        size: "medium",
        bold: true,
      }}
      subtitle={{
        text: `Bs. ${state.amount}`,
        color: "warning",
        margin: true,
        size: "medium",
        bold: true,
      }}
      content={<PaymentsCard />}
      leftButtons={[
        {
          type: "text",
          text:
            state.paid_BS + state.paid_US * 6.94 < state.amount &&
            state.change > 0
              ? "Por pagar: "
              : state.paid_BS + state.paid_US * 6.94 === state.amount
              ? "Sin cambio: "
              : "Cambio: ",
          size: "default",
          align: "left",
          margin: true,
          display: "inline",
          bold: true,
        },
        {
          type: "text",
          text: (
            <NumberFormat
              value={state.change}
              displayType={"text"}
              thousandSeparator={true}
              allowNegative={false}
              allowEmptyFormatting={false}
              allowLeadingZeros={false}
              decimalScale={2}
              isNumericString={true}
              renderText={(value) => <span>Bs. {value}</span>}
            />
          ),
          size: "default",
          align: "right",
          margin: true,
          color:
            state.paid_BS + state.paid_US * 6.94 < state.amount &&
            state.change > 0
              ? "danger"
              : state.paid_BS + state.paid_US * 6.94 === state.amount
              ? "default"
              : "success",
          display: "inline",
          bold: true,
        },
      ]}
      rightButtons={[
        {
          type: "button",
          text: "Cobrar",
          color: "primary",
          icon: DoneRoundedIcon,
          edge: "start",
          size: "large",
          variant: "contained",
          disabled:
            state.paid_BS + state.paid_US * 6.68 >= state.amount ? false : true,
          onClick: handleMakeCollected,
        },
      ]}
      renderRefresh={[
        open,
        state.change,
        state.id,
        state.card_number,
        collect_fetching,
      ]}
      loading={collect_fetching}
      scroll="paper"
      maxWidth="sm"
      fullWidth
    />
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { tables, environments, collects, orders } = state;
  return {
    loading: environments.loading,
    tables: tables.payload.filter((dataList) => dataList.state === 1),
    collect_fetching: collects.fetching,
    orders_detail_payload: orders.orders_detail,
    order_loading: orders.loading,
  };
};

export default connect(mapStateToProps, null)(ModalAmountToPay);

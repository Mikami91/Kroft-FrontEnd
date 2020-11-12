// Dependencies
import React, { useContext, useMemo } from "react";
import NumberFormat from "react-number-format";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
// core components
import CustomModal from "../../../components/Modal/CustomModal.js";
// Local components
import Payments from "./Payments";
// Contexts
import CurrentTableContext from "../../../hooks/contexts/TableContext";
// Functions
import { collectCreate } from "../../../functions/cruds/collectFunctions";

function ModalAmountToPay(props) {
  // Props
  const {
    // Local
    open,
    close,
    // Redux
    collect_fetching,
  } = props;

  // Use Contexts
  const {
    state,
    emptyState,
    TO_PAY,
    WITHOUT_CHANGE,
    WITH_CHANGE,
    PAID_OKAY,
    CARD_OKAY,
    cashValid,
    cardValid,
    cashCardValid,
    variousCardsValid,
    willPayValid,
    makeDynamicState,
  } = useContext(CurrentTableContext);

  const handleCloseTotalAmount = () => {
    emptyState();
    close();
  };

  // Send Order function
  const handleMakeCollected = async (e) => {
    e.preventDefault();
    const dynamicState = await makeDynamicState();
    collectCreate(dynamicState).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          handleCloseTotalAmount();
        }
      }
    });
  };

  let btnDisabled = true;

  // Validated function
  useMemo(() => {
    if (cashValid) {
      return (btnDisabled = false);
    }

    if (cardValid) {
      return (btnDisabled = false);
    }

    if (cashCardValid) {
      return (btnDisabled = false);
    }

    if (variousCardsValid) {
      return (btnDisabled = false);
    }

    if (willPayValid) {
      return (btnDisabled = false);
    }
  }, [
    open,
    cashValid ||
    cardValid ||
    cashCardValid ||
    variousCardsValid ||
    willPayValid === true
      ? state
      : null,
  ]);

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
        text: `Bs. ${state.total_amount}`,
        color: "warning",
        margin: true,
        size: "medium",
        bold: true,
      }}
      content={<Payments />}
      leftButtons={[
        {
          type: "text",
          text: TO_PAY
            ? "Por pagar: "
            : WITHOUT_CHANGE
            ? "Sin cambio: "
            : WITH_CHANGE
            ? "Cambio: "
            : "",
          color: TO_PAY
            ? "danger"
            : WITHOUT_CHANGE
            ? "default"
            : WITH_CHANGE
            ? "success"
            : "",
          size: "default",
          align: "left",
          margin: true,
          display: "inline",
          bold: true,
        },
        {
          type: "text",
          text:
            TO_PAY || WITHOUT_CHANGE || WITH_CHANGE ? (
              <NumberFormat
                value={state.change_amount}
                displayType={"text"}
                thousandSeparator={true}
                allowNegative={false}
                allowEmptyFormatting={false}
                allowLeadingZeros={false}
                decimalScale={2}
                fixedDecimalScale={true}
                isNumericString={true}
                renderText={(value) => <span>Bs. {value}</span>}
              />
            ) : (
              ""
            ),
          size: "default",
          align: "right",
          margin: true,
          color: "warning",
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
          disabled: btnDisabled,
          onClick: handleMakeCollected,
        },
      ]}
      renderRefresh={[
        open,
        // state.change_amount,
        // state.id,
        // state.credit_card1_number,
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

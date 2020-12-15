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
// Hooks
import { useCurrentTable } from "../../../hooks/useCurrentTable";
// Contexts
import CurrentTableContext from "../../../hooks/contexts/TableContext";
// Functions
import { collectCreate } from "../../../functions/cruds/collectFunctions";

function ModalAmountToPay(props) {
  const {
    // Props
    open,
    close,
    // Redux
    current,
    collect_fetching,
  } = props;

  // Hooks for Tables
  const [
    currentTableState,
    setCurrentTable,
    emptyCurrentTable,
    changeAmountBS,
    changeAmountUS,
    changePaymentType,
    changeCreditCard1,
    changeCreditCard2,
    changeCreditCard3,
    changeWillPay,
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
  ] = useCurrentTable();

  console.log(cashValid);

  const handleCloseTotalAmount = () => {
    emptyCurrentTable();
    close();
  };

  // Send Order function
  const handleMakeCollected = async (e) => {
    e.preventDefault();
    const dynamicState = await makeDynamicState();
    dynamicState["table_id"] = current.table_id;
    dynamicState["order_id"] = current.order_id;
    collectCreate(dynamicState).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          handleCloseTotalAmount();
        }
      }
    });
  };

  let cashValid2 =
    currentTableState.us_amount * 6.94 + currentTableState.bs_amount >=
    current.total_amount;

  let btnDisabled = true;

  // Validated function
  useMemo(() => {
    if (cashValid2) {
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
      ? currentTableState
      : null,
  ]);

  return (
    <CustomModal
      open={open || (current.open && current.table_busy === 2)}
      close={close}
      closeIcon={collect_fetching === true ? false : true}
      title={{
        text: "Total:",
        margin: true,
        size: "medium",
        bold: true,
      }}
      subtitle={{
        text: `Bs. ${current.total_amount}`,
        color: "warning",
        margin: true,
        size: "medium",
        bold: true,
      }}
      content={
        <CurrentTableContext.Provider
          value={{
            state: currentTableState,
            setState: setCurrentTable,
            emptyState: emptyCurrentTable,
            changeBs: changeAmountBS,
            changeUs: changeAmountUS,
            changePaymentType: changePaymentType,
            changeCard1: changeCreditCard1,
            changeCard2: changeCreditCard2,
            changeCard3: changeCreditCard3,
            changeWillPay: changeWillPay,
            TO_PAY: TO_PAY,
            WITHOUT_CHANGE: WITHOUT_CHANGE,
            WITH_CHANGE: WITH_CHANGE,
            PAID_OKAY: PAID_OKAY,
            CARD_OKAY: CARD_OKAY,
            cashValid: cashValid,
            cardValid: cardValid,
            cashCardValid: cashCardValid,
            variousCardsValid: variousCardsValid,
            willPayValid: willPayValid,
            makeDynamicState: makeDynamicState,
          }}
        >
          <Payments />
        </CurrentTableContext.Provider>
      }
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
                value={currentTableState.change_amount}
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
        current.open,
        currentTableState.change_amount,
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
  const { product, collects } = state;
  return {
    current: product.current,
    collect_fetching: collects.fetching,
  };
};

export default connect(mapStateToProps, null)(ModalAmountToPay);

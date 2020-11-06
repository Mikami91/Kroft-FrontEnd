// Dependencies
import { useState } from "react";
// Functions
import { isEmptyValue } from "../functions/isEmptyValue";

export const useCurrentTable = () => {
  const [currentTableState, setCurrentTableState] = useState({
    // Table variables
    id: null,
    name: "",
    number: null,
    amount: 0,
    is_busy: null,
    order_id: null,
    state: null,
    // Environment variables
    environment_id: null,
    environment_name: "",
    environment_prefix: "",
    // Other variables
    payment_type: "cash",
    payment_id: 1,
    currency: 0,
    card_number: "",
    paid_BS: 0,
    paid_US: 0,
    change: 0,
  });

  const {
    payment_type,
    paid_BS,
    paid_US,
    card_number,
    amount,
    change,
  } = currentTableState;

  const setCurrentTable = (args) => {
    setCurrentTableState({
      ...currentTableState,
      id: args.id,
      name: args.name,
      number: args.number,
      amount: args.amount,
      is_busy: args.is_busy,
      order_id: args.order_id,
      state: args.state,
      environment_id: args.environment_id,
      environment_name: args.environment_name,
      environment_prefix: args.environment_prefix,
    });
  };

  const emptyCurrentTable = () => {
    setCurrentTableState({
      // Table variables
      id: null,
      name: "",
      number: null,
      amount: 0,
      is_busy: null,
      order_id: null,
      state: null,
      environment_id: null,
      environment_name: "",
      environment_prefix: "",
      // Other variables
      currency: 0,
      card_number: "",
      paid_BS: 0,
      paid_US: 0,
      change: 0,
    });
  };

  // Changes amount to paid value
  const handleChangeAmountBS = (e) => {
    let value = isEmptyValue(e.floatValue) ? 0 : e.floatValue;
    setCurrentTableState({
      ...currentTableState,
      paid_BS: value,
      change: Math.abs(paid_US * 6.94 + value - amount),
    });
  };

  const handleChangeAmountUS = (e) => {
    let value = isEmptyValue(e.floatValue) ? 0 : e.floatValue;
    setCurrentTableState({
      ...currentTableState,
      paid_US: value,
      change: Math.abs(value * 6.94 + paid_BS - amount),
    });
  };

  const handleChangePaymentType = (array) => {
    setCurrentTableState({
      ...currentTableState,
      payment_type: array[0],
      payment_id: array[1],
    });
  };

  const handleChangeCreditCard = (e) => {
    setCurrentTableState({
      ...currentTableState,
      card_number: e.value,
    });
  };

  // Validated parameters
  const TO_PAY = paid_US * 6.94 + paid_BS < amount && change > 0;
  const WITHOUT_CHANGE = paid_US * 6.94 + paid_BS === amount && change > 0;
  const WITH_CHANGE = paid_US * 6.94 + paid_BS > amount && change > 0;

  const PAID_OKAY = paid_US * 6.68 + paid_BS >= amount;
  const CARD_OKAY = card_number !== "" && card_number.length === 16;

  let cashValid = payment_type === "cash" && PAID_OKAY ? true : false;

  let cardValid = payment_type === "card" && CARD_OKAY ? true : false;

  let cashCardValid =
    payment_type === "cash_card" && PAID_OKAY && CARD_OKAY ? true : false;

  return [
    currentTableState,
    setCurrentTable,
    emptyCurrentTable,
    handleChangeAmountBS,
    handleChangeAmountUS,
    handleChangePaymentType,
    handleChangeCreditCard,
    TO_PAY,
    WITHOUT_CHANGE,
    WITH_CHANGE,
    PAID_OKAY,
    CARD_OKAY,
    cashValid,
    cardValid,
    cashCardValid,
  ];
};

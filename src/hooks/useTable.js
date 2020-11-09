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
    total_amount: 0,
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
    bs_amount: 0,
    us_amount: 0,
    change_amount: 0,
  });

  const {
    payment_type,
    bs_amount,
    us_amount,
    card_number,
    total_amount,
    change_amount,
  } = currentTableState;

  const setCurrentTable = (args) => {
    setCurrentTableState({
      ...currentTableState,
      id: args.id,
      name: args.name,
      number: args.number,
      total_amount: args.total_amount,
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
      total_amount: 0,
      is_busy: null,
      order_id: null,
      state: null,
      environment_id: null,
      environment_name: "",
      environment_prefix: "",
      // Other variables
      currency: 0,
      card_number: "",
      bs_amount: 0,
      us_amount: 0,
      change_amount: 0,
    });
  };

  // Changes total_amount to paid value
  const handleChangeAmountBS = (e) => {
    let value = isEmptyValue(e.floatValue) ? 0 : e.floatValue;
    setCurrentTableState({
      ...currentTableState,
      bs_amount: value,
      change_amount: Math.abs(us_amount * 6.94 + value - total_amount),
    });
  };

  const handleChangeAmountUS = (e) => {
    let value = isEmptyValue(e.floatValue) ? 0 : e.floatValue;
    setCurrentTableState({
      ...currentTableState,
      us_amount: value,
      change_amount: Math.abs(value * 6.94 + bs_amount - total_amount),
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
  const TO_PAY = us_amount * 6.94 + bs_amount < total_amount && change_amount > 0.00;
  const WITHOUT_CHANGE = us_amount * 6.94 + bs_amount === total_amount;
  const WITH_CHANGE = us_amount * 6.94 + bs_amount > total_amount && change_amount > 0.00;

  const PAID_OKAY = us_amount * 6.94 + bs_amount >= total_amount;
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

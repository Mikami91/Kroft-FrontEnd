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
    // Payments
    payment_type: "cash",
    payment_id: 1,
    credit_card1_number: "",
    credit_card2_number: "",
    credit_card3_number: "",
    currency: 0,
    bs_amount: 0,
    us_amount: 0,
    cards_amount: 0,
    will_pay_amount: 0,
    company_name: "",
    responsable: "",
    ci: "",
    phone: "",
    change_amount: 0,
  });

  const {
    payment_type,
    bs_amount,
    us_amount,
    credit_card1_number,
    credit_card2_number,
    company_name,
    responsable,
    ci,
    phone,
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
      // Environment variables
      environment_id: null,
      environment_name: "",
      environment_prefix: "",
      // Payments
      credit_card1_number: "",
      credit_card2_number: "",
      credit_card3_number: "",
      currency: 0,
      bs_amount: 0,
      us_amount: 0,
      cards_amount: 0,
      will_pay_amount: 0,
      company_name: "",
      responsable: "",
      ci: "",
      phone: "",
      change_amount: 0,
    });
  };

  // Changes total_amount to paid value
  const changeAmountBS = (e) => {
    let value = isEmptyValue(e.floatValue) ? 0 : e.floatValue;
    setCurrentTableState({
      ...currentTableState,
      bs_amount: value,
      change_amount: Math.abs(us_amount * 6.94 + value - total_amount),
    });
  };

  const changeAmountUS = (e) => {
    let value = isEmptyValue(e.floatValue) ? 0 : e.floatValue;
    setCurrentTableState({
      ...currentTableState,
      us_amount: value,
      change_amount: Math.abs(value * 6.94 + bs_amount - total_amount),
    });
  };

  const changePaymentType = (array) => {
    setCurrentTableState({
      ...currentTableState,
      payment_type: array[0],
      payment_id: array[1],
    });
  };

  const changeCreditCard1 = (e) => {
    setCurrentTableState({
      ...currentTableState,
      credit_card1_number: e.value,
    });
  };

  const changeCreditCard2 = (e) => {
    setCurrentTableState({
      ...currentTableState,
      credit_card2_number: e.value,
    });
  };

  const changeCreditCard3 = (e) => {
    setCurrentTableState({
      ...currentTableState,
      credit_card3_number: e.value,
    });
  };

  const changeWillPay = (e) => {
    const { name, value } = e.target;
    setCurrentTableState({
      ...currentTableState,
      [name]: value,
    });
  };

  // Validated parameters
  const TO_PAY =
    us_amount * 6.94 + bs_amount < total_amount && change_amount > 0.0;
  const WITHOUT_CHANGE = us_amount * 6.94 + bs_amount === total_amount;
  const WITH_CHANGE =
    us_amount * 6.94 + bs_amount > total_amount && change_amount > 0.0;

  const PAID_OKAY = us_amount * 6.94 + bs_amount >= total_amount;
  const CARD_OKAY = credit_card1_number.length === 16;
  const CARDS_OKAY =
    credit_card1_number.length === 16 && credit_card2_number.length === 16;
  const WILL_PAY_OKAY =
    company_name.length >= 2 &&
    responsable.length >= 5 &&
    ci.length === 7 &&
    phone.length === 8;

  let cashValid = payment_type === "cash" && PAID_OKAY ? true : false;

  let cardValid = payment_type === "card" && CARD_OKAY ? true : false;

  let cashCardValid =
    payment_type === "cash_card" && PAID_OKAY && CARD_OKAY ? true : false;

  let variousCardsValid =
    payment_type === "various_cards" && CARDS_OKAY ? true : false;

  let willPayValid =
    payment_type === "will_pay" && WILL_PAY_OKAY ? true : false;

  return [
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
  ];
};

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
    box: 1,
    currency: 0,
    card_number: null,
    paid_BS: 0,
    paid_US: 0,
    change: 0,
  });

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
      box_id: localStorage.getItem("box_id"),
      currency: 0,
      card_number: null,
      paid_BS: 0,
      paid_US: 0,
      change: 0,
    });
  };

  // Changes amount to paid value
  const handleChangeAmountBS = (e) => {
    if (isEmptyValue(e.value) === false) {
      let result =
        parseInt(e.value) +
        currentTableState.paid_US * 6.94 -
        currentTableState.amount;
      setCurrentTableState({
        ...currentTableState,
        paid_BS: parseInt(e.value),
        change: Math.abs(result),
      });
    }
  };

  const handleChangeAmountUS = (e) => {
    if (isEmptyValue(e.value) === false) {
      let result =
        currentTableState.paid_BS +
        parseInt(e.value) * 6.94 -
        currentTableState.amount;
      setCurrentTableState({
        ...currentTableState,
        paid_US: parseInt(e.value),
        change: Math.abs(result),
      });
    }
  };

  const handleChangePaymentType = (array) => {
    setCurrentTableState({
      ...currentTableState,
      payment_type: array[0],
      payment_id: array[1],
    });
  };

  console.log(currentTableState.payment_id);

  const handleChangeCreditCard = (e) => {
    setCurrentTableState({
      ...currentTableState,
      card_number: e.value,
    });
  };

  return [
    currentTableState,
    setCurrentTable,
    emptyCurrentTable,
    handleChangeAmountBS,
    handleChangeAmountUS,
    handleChangePaymentType,
    handleChangeCreditCard,
  ];
};

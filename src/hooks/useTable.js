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
    const { floatValue } = e;
    if (isEmptyValue(floatValue) === false) {
      const { paid_US, amount } = currentTableState;
      setCurrentTableState({
        ...currentTableState,
        paid_BS: floatValue,
        change: Math.abs(floatValue + paid_US * 6.94 - amount),
      });
    }
  };

  const handleChangeAmountUS = (e) => {
    const { floatValue } = e;
    if (isEmptyValue(floatValue) === false) {
      const { paid_BS, amount } = currentTableState;
      setCurrentTableState({
        ...currentTableState,
        paid_US: floatValue,
        change: Math.abs(paid_BS + floatValue * 6.94 - amount),
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

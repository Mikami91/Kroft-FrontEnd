// Dependencies
import { useState } from "react";

export const useBoxModal = (initialState = false) => {
  const [openBox, setOpenBox] = useState(initialState);
  const toggleBox = () => setOpenBox(!openBox);
  return [openBox, toggleBox];
};

export const useAmountPay = (initialState = false) => {
  const [openAmountPay, setAmountPay] = useState(initialState);
  const toggleAmountPay = () => setAmountPay(!openAmountPay);
  return [openAmountPay, toggleAmountPay];
};

export const useBoxSelectModal = (newValue = null) => {
  const [selectBoxState, setSelectBoxState] = useState({
    open: parseInt(localStorage.getItem("box_id")) === 0 || null ? true : false,
    box_id: newValue,
  });
  const setSelectBox = (newValue) =>
    setSelectBoxState({
      ...selectBoxState,
      box_id: newValue,
    });
  const toggleSelectBox = () =>
    setSelectBoxState({
      ...selectBoxState,
      open: !selectBoxState.open,
    });
  return [selectBoxState, setSelectBox, toggleSelectBox];
};

export const usePassCollectModal = (initialState = false) => {
  const [openPassCollect, setPassCollect] = useState(initialState);
  const togglePassCollect = () => setPassCollect(!openPassCollect);
  return [openPassCollect, togglePassCollect];
};

export const useModal = (initialIsOpened = false) => {
  const [isOpened, setIsOpened] = useState(initialIsOpened);
  const toggle = () => setIsOpened(!isOpened);
  return [isOpened, setIsOpened, toggle];
};

export const useChangeTableModal = (initialIsOpened = false) => {
  const [changeTableOpen, setChangeTableOpen] = useState(initialIsOpened);
  const toggleChangeTable = () => setChangeTableOpen(!changeTableOpen);
  return [changeTableOpen, setChangeTableOpen, toggleChangeTable];
};

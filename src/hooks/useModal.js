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
  return [isOpened, toggle];
};

export const useChangeTableModal = (initialIsOpened = false) => {
  const [changeTableOpen, setChangeTableOpen] = useState(initialIsOpened);
  const toggleChangeTable = () => setChangeTableOpen(!changeTableOpen);
  return [changeTableOpen, toggleChangeTable];
};

export const useProductsOrdersModal = () => {
  const [openProductsOrders, setProductsOrders] = useState(false);
  const toggleProductsOrders = () => setProductsOrders(!openProductsOrders);
  return [openProductsOrders, toggleProductsOrders];
};

// export const useTotalAmountModal = () => {
//   const [openTotalAmount, setTotalAmount] = useState(false);
//   const toggleTotalAmount = () => setTotalAmount(!openTotalAmount);
//   return [openTotalAmount, toggleTotalAmount];
// };

export const useTotalAmountModal = () => {
  const [totalAmount, setTotalAmountState] = useState({
    open: false,
    list: [],
  });
  const setTotalAmount = (array, key) => {
    setTotalAmountState({
      ...totalAmount,
      list: array.filter((index) => index.order_id === key),
    });
  };
  const toggleTotalAmount = () =>
    setTotalAmountState({
      ...totalAmount,
      open: !totalAmount.open,
      list: totalAmount.open ? totalAmount.list : [],
    });
  return [totalAmount, setTotalAmount, toggleTotalAmount];
};

export const useHistoryPrintsModal = () => {
  const [historyPrints, setHistoryPrintsState] = useState({
    open: false,
    list: [],
  });
  const setHistoryPrints = (array, keys) => {
    setHistoryPrintsState({
      ...historyPrints,
      list: array.filter(
        (index) =>
          index.order_number === keys.order_number &&
          index.order_id === keys.order_id
      ),
    });
  };
  const toggleHistoryPrints = () =>
    setHistoryPrintsState({
      ...historyPrints,
      open: !historyPrints.open,
      list: historyPrints.open ? historyPrints.list : [],
    });
  return [historyPrints, setHistoryPrints, toggleHistoryPrints];
};

export const useSubCategoryModal = () => {
  const [subCategory, setSubCategory] = useState({
    open: false,
    name: "",
    key: null,
    payload: [],
  });
  const openSubCategory = (name, key, array) => {
    setSubCategory({
      open: true,
      name: name,
      key: key,
      payload: array.filter((index) => index.sub_category_id === key),
    });
  };
  const closeSubCategory = () => {
    setSubCategory({
      open: false,
      name: "",
      key: null,
      payload: [],
    });
  };
  console.log(subCategory);
  return [subCategory, openSubCategory, closeSubCategory];
};

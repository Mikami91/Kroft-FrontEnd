// Action types
import {
  ORDER_LIST,
  ORDERS_DETAIL_LIST,
  ORDER_LOADING,
} from "../actions/actionsTypes";

// Default State
const orderState = {
  payload: [],
  orders_detail: [],
  orders_filter: [],
  loading: false,
};

export function orderReducer(state = orderState, action) {
  switch (action.type) {
    case ORDER_LIST:
      return {
        ...state,
        payload: action.payload,
      };

    case ORDERS_DETAIL_LIST:
      return {
        ...state,
        orders_detail: action.payload,
        orders_filter: action.payload.reduce(function (arr, cur) {
          let found = arr.find(
            (i) =>
              i.product_id === cur.product_id && i.order_id === cur.order_id
          );
          found
            ? (found.product_quantity += cur.product_quantity)
            : arr.push(cur);
          return arr;
        }, []),
      };

    case ORDER_LOADING:
      return {
        ...state,
        loading: action.value,
      };

    default:
      return state;
  }
}

// Action types
import { ORDER_LIST, ORDERS_DETAIL_LIST, ORDER_LOADING } from '../actions/actionsTypes';

// Default State
const orderState = {
  payload: [],
  orders_detail: [],
  loading: false,
};

export function orderReducer(state = orderState, action) {

  switch (action.type) {
    case ORDER_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case ORDERS_DETAIL_LIST:
      return {
        ...state,
        orders_detail: action.payload
      };

    case ORDER_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
// Action types
import { PAYMENT_LIST, PAYMENT_FETCHING, PAYMENT_LOADING } from '../actions/actionsTypes';

// Default State
const paymentState = {
  payload: [],
  fetching: false,
  loading: false,
};

export function paymentReducer(state = paymentState, action) {

  switch (action.type) {
    case PAYMENT_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case PAYMENT_FETCHING:
      return {
        ...state,
        fetching: action.value
      };

    case PAYMENT_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
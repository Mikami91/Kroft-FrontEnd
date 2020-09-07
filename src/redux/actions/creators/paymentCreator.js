// Store
import store from '../../store';
// Action types
import { PAYMENT_LIST, PAYMENT_FETCHING, PAYMENT_LOADING } from '../actionsTypes';


export const payment_list = (payload) => {
  return {
    type: PAYMENT_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(payment_list(payload));

export const payment_fetching = (value) => {
  return {
    type: PAYMENT_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(payment_fetching(value));

export const payment_loading = (value) => {
  return {
    type: PAYMENT_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(payment_loading(value));
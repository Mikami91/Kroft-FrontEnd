// Store
import store from '../../store';
// Action types
import { CUSTOMER_LIST, CUSTOMER_FETCHING, CUSTOMER_LOADING } from '../actionsTypes';


export const customer_list = (payload) => {
  return {
    type: CUSTOMER_LIST,
    payload: payload
  };
};
export const payload = (payload) => store.dispatch(customer_list(payload));

export const customer_fetching = (value) => {
  return {
    type: CUSTOMER_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(customer_fetching(value));

export const customer_loading = (value) => {
  return {
    type: CUSTOMER_LOADING,
    value: value
  };
};
export const loading = (value) => store.dispatch(customer_loading(value));

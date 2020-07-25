// Store
import store from '../../store';
// Action types
import { PRODUCT_LIST, SET_TABLES, PRODUCT_ORDERS, PRODUCT_LOADING } from '../actionsTypes';


export const product_list = (payload) => {
  return {
    type: PRODUCT_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(product_list(payload));

export const set_tables = (payload) => {
  return {
    type: SET_TABLES,
    payload: payload
  };
}
export const tables = (payload) => store.dispatch(set_tables(payload));

export const product_orders = (payload) => {
  return {
    type: PRODUCT_ORDERS,
    payload: payload
  };
}
export const orders = (payload) => store.dispatch(product_orders(payload));

export const product_loading = (value) => {
  return {
    type: PRODUCT_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(product_loading(value));
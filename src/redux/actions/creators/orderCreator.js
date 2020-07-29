// Store
import store from '../../store';
// Action types
import { ORDER_LIST, ORDER_LOADING } from '../actionsTypes';


export const order_list = (payload) => {
  return {
    type: ORDER_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(order_list(payload));

export const order_loading = (value) => {
  return {
    type: ORDER_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(order_loading(value));
// Store
import store from '../../store';
// Action types
import { PRODUCT_LIST, PRODUCT_LOADING } from '../actionsTypes';


export const product_list = (payload) => {
  return {
    type: PRODUCT_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(product_list(payload));

export const product_loading = (value) => {
  return {
    type: PRODUCT_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(product_loading(value));
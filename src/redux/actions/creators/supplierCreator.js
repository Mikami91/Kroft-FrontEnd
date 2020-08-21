// Store
import store from '../../store';
// Action types
import {
  SUPPLIER_LIST,
  SUPPLIER_FETCHING,
  SUPPLIER_LOADING
} from '../actionsTypes';


export const supplier_list = (payload) => {
  return {
    type: SUPPLIER_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(supplier_list(payload));

export const supplier_fetching = (value) => {
  return {
    type: SUPPLIER_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(supplier_fetching(value));

export const supplier_loading = (value) => {
  return {
    type: SUPPLIER_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(supplier_loading(value));
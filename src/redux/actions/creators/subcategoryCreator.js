// Store
import store from '../../store';
// Action types
import { SUB_CATEGORY_LIST, SUB_CATEGORY_LOADING } from '../actionsTypes';


export const subcategory_list = (payload) => {
  return {
    type: SUB_CATEGORY_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(subcategory_list(payload));

export const subcategory_loading = (value) => {
  return {
    type: SUB_CATEGORY_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(subcategory_loading(value));
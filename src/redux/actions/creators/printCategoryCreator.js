// Store
import store from '../../store';
// Action types
import { PRINT_CATEGORY_LIST, PRINT_CATEGORY_FETCHING, PRINT_CATEGORY_LOADING } from '../actionsTypes';


export const print_category_list = (payload) => {
  return {
    type: PRINT_CATEGORY_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(print_category_list(payload));

export const print_category_fetching = (value) => {
  return {
    type: PRINT_CATEGORY_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(print_category_fetching(value));

export const print_category_loading = (value) => {
  return {
    type: PRINT_CATEGORY_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(print_category_loading(value));
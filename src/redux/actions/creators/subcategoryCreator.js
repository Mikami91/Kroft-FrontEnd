// Store
import store from '../../store';
// Action types
import { SUB_CATEGORY_LIST, SUB_CATEGORY_FETCHING, SUB_CATEGORY_LOADING } from '../actionsTypes';


export const sub_category_list = (payload) => {
  return {
    type: SUB_CATEGORY_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(sub_category_list(payload));

export const sub_category_fetching = (value) => {
  return {
    type: SUB_CATEGORY_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(sub_category_fetching(value));

export const sub_category_loading = (value) => {
  return {
    type: SUB_CATEGORY_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(sub_category_loading(value));
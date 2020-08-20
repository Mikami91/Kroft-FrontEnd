// Store
import store from '../../store';
// Action types
import { CATEGORY_LIST, CATEGORY_FETCHING, CATEGORY_LOADING } from '../actionsTypes';


export const category_list = (payload) => {
  return {
    type: CATEGORY_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(category_list(payload));

export const category_fetching = (value) => {
  return {
    type: CATEGORY_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(category_fetching(value));

export const category_loading = (value) => {
  return {
    type: CATEGORY_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(category_loading(value));
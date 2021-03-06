// Store
import store from '../../store';
// Action types
import { ADMIN_LIST, ADMIN_FETCHING, ADMIN_LOADING } from '../actionsTypes';


export const admin_list = (payload) => {
  return {
    type: ADMIN_LIST,
    payload: payload
  };
};
export const payload = (payload) => store.dispatch(admin_list(payload));

export const admin_fetching = (value) => {
  return {
    type: ADMIN_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(admin_fetching(value));

export const admin_loading = (value) => {
  return {
    type: ADMIN_LOADING,
    value: value
  };
};
export const loading = (value) => store.dispatch(admin_loading(value));

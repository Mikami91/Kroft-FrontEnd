// Store
import store from "../../store";
// Action types
import {
  SUPER_ADMIN_LIST,
  SUPER_ADMIN_FETCHING,
  SUPER_ADMIN_LOADING,
} from "../actionsTypes";

export const super_admin_list = (payload) => {
  return {
    type: SUPER_ADMIN_LIST,
    payload: payload,
  };
};
export const payload = (payload) => store.dispatch(super_admin_list(payload));

export const super_admin_fetching = (value) => {
  return {
    type: SUPER_ADMIN_FETCHING,
    value: value,
  };
};
export const fetching = (value) => store.dispatch(super_admin_fetching(value));

export const super_admin_loading = (value) => {
  return {
    type: SUPER_ADMIN_LOADING,
    value: value,
  };
};
export const loading = (value) => store.dispatch(super_admin_loading(value));

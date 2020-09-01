// Store
import store from '../../store';
// Action types
import {
  COLLECT_LIST,
  COLLECT_GLOBAL,
  COLLECT_CASHIER,
  COLLECT_WAITER,
  COLLECT_ENV,
  COLLECT_TABLE,
  COLLECT_FETCHING,
  COLLECT_LOADING,
} from '../actionsTypes';


export const collect_list = (payload) => {
  return {
    type: COLLECT_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(collect_list(payload));

export const collect_global = (payload) => {
  return {
    type: COLLECT_GLOBAL,
    payload: payload
  };
}
export const global = (payload) => store.dispatch(collect_global(payload));

export const collect_cashier = (payload) => {
  return {
    type: COLLECT_CASHIER,
    payload: payload
  };
}
export const cashier = (payload) => store.dispatch(collect_cashier(payload));

export const collect_waiter = (payload) => {
  return {
    type: COLLECT_WAITER,
    payload: payload
  };
}
export const waiter = (payload) => store.dispatch(collect_waiter(payload));

export const collect_env = (payload) => {
  return {
    type: COLLECT_ENV,
    payload: payload
  };
}
export const env = (payload) => store.dispatch(collect_env(payload));

export const collect_table = (payload) => {
  return {
    type: COLLECT_TABLE,
    payload: payload
  };
}
export const table = (payload) => store.dispatch(collect_table(payload));

export const collect_fetching = (value) => {
  return {
    type: COLLECT_FETCHING,
    value: value
  };
}
export const fetching = (value) => store.dispatch(collect_fetching(value));

export const collect_loading = (value) => {
  return {
    type: COLLECT_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(collect_loading(value));
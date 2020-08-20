// Store
import store from '../../store';
// Action types
import { EMPLOYEE_LIST, EMPLOYEE_FETCHING, EMPLOYEE_LOADING } from '../actionsTypes';


export const employee_list = (payload) => {
  return {
    type: EMPLOYEE_LIST,
    payload: payload
  };
};
export const payload = (payload) => store.dispatch(employee_list(payload));

export const employee_fetching = (value) => {
  return {
    type: EMPLOYEE_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(employee_fetching(value));

export const employee_loading = (value) => {
  return {
    type: EMPLOYEE_LOADING,
    value: value
  };
};
export const loading = (value) => store.dispatch(employee_loading(value));

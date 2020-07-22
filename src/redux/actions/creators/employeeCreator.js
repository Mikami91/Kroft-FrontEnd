// Store
import store from '../../store';
// Action types
import { EMPLOYEE_DATA, EMPLOYEE_LOADING } from '../actionsTypes';


export const employee_data = (payload) => {
  return {
    type: EMPLOYEE_DATA,
    payload: payload
  };
};
export const payload = (payload) => store.dispatch(employee_data(payload));

export const employee_loading = (value) => {
  return {
    type: EMPLOYEE_LOADING,
    value: value
  };
};
export const loading = (value) => store.dispatch(employee_loading(value));

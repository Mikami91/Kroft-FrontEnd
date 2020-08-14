// Store
import store from '../../store';
// Action types
import { ADMIN_DATA, ADMIN_LOADING } from '../actionsTypes';


export const admin_data = (payload) => {
  return {
    type: ADMIN_DATA,
    payload: payload
  };
};
export const payload = (payload) => store.dispatch(admin_data(payload));

export const admin_loading = (value) => {
  return {
    type: ADMIN_LOADING,
    value: value
  };
};
export const loading = (value) => store.dispatch(admin_loading(value));

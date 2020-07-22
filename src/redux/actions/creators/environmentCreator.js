// Store
import store from '../../store';
// Action types
import { ENVIRONMENT_LIST, ENVIRONMENT_LOADING } from '../actionsTypes';


export const environment_list = (payload) => {
  return {
    type: ENVIRONMENT_LIST,
    payload: payload
  };
};
export const payload = (payload) => store.dispatch(environment_list(payload));

export const environment_loading = (value) => {
  return {
    type: ENVIRONMENT_LOADING,
    value: value
  };
};
export const loading = (value) => store.dispatch(environment_loading(value));

// Store
import store from '../../store';
// Action types
import { ENVIRONMENT_LIST, ENVIRONMENT_FETCHING, ENVIRONMENT_LOADING } from '../actionsTypes';


export const environment_list = (payload) => {
  return {
    type: ENVIRONMENT_LIST,
    payload: payload
  };
};
export const payload = (payload) => store.dispatch(environment_list(payload));

export const environment_fetching = (value) => {
  return {
    type: ENVIRONMENT_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(environment_fetching(value));

export const environment_loading = (value) => {
  return {
    type: ENVIRONMENT_LOADING,
    value: value
  };
};
export const loading = (value) => store.dispatch(environment_loading(value));

// Store
import store from '../../store';
// Action types
import { COMPANY_LIST, COMPANY_FETCHING, COMPANY_LOADING } from '../actionsTypes';


export const company_list = (payload) => {
  return {
    type: COMPANY_LIST,
    payload: payload
  };
};
export const payload = (payload) => store.dispatch(company_list(payload));

export const company_fetching = (value) => {
  return {
    type: COMPANY_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(company_fetching(value));

export const company_loading = (value) => {
  return {
    type: COMPANY_LOADING,
    value: value
  };
};
export const loading = (value) => store.dispatch(company_loading(value));

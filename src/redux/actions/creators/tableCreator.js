// Store
import store from '../../store';
// Action types
import { TABLE_LIST, TABLE_FETCHING, TABLE_LOADING } from '../actionsTypes';


export const table_list = (payload) => {
  return {
    type: TABLE_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(table_list(payload));

export const environment_fetching = (value) => {
  return {
    type: TABLE_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(environment_fetching(value));

export const table_loading = (value) => {
  return {
    type: TABLE_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(table_loading(value));
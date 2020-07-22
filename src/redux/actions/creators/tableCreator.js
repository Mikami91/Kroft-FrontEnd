// Store
import store from '../../store';
// Action types
import { TABLE_LIST, TABLE_LOADING } from '../actionsTypes';


export const table_list = (payload) => {
  return {
    type: TABLE_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(table_list(payload));

export const table_loading = (payload) => {
  return {
    type: TABLE_LOADING,
    payload: payload
  };
}
export const loading = (payload) => store.dispatch(table_loading(payload));
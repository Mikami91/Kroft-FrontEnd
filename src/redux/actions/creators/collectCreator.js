// Store
import store from '../../store';
// Action types
import { COLLECT_LIST, COLLECT_LOADING } from '../actionsTypes';


export const collect_list = (payload) => {
  return {
    type: COLLECT_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(collect_list(payload));

export const collect_loading = (value) => {
  return {
    type: COLLECT_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(collect_loading(value));
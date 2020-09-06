// Store
import store from '../../store';
// Action types
import { ROL_LIST, ROL_FETCHING, ROL_LOADING } from '../actionsTypes';


export const rol_list = (payload) => {
  return {
    type: ROL_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(rol_list(payload));

export const rol_fetching = (value) => {
  return {
    type: ROL_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(rol_fetching(value));

export const rol_loading = (value) => {
  return {
    type: ROL_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(rol_loading(value));
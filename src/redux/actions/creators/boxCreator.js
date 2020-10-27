// Store
import store from '../../store';
// Action types
import { BOX_LIST, BOX_FETCHING, BOX_LOADING } from '../actionsTypes';


export const box_list = (payload) => {
  return {
    type: BOX_LIST,
    payload: payload
  };
}
export const payload = (payload) => store.dispatch(box_list(payload));

export const box_fetching = (value) => {
  return {
    type: BOX_FETCHING,
    value: value
  };
};
export const fetching = (value) => store.dispatch(box_fetching(value));

export const box_loading = (value) => {
  return {
    type: BOX_LOADING,
    value: value
  };
}
export const loading = (value) => store.dispatch(box_loading(value));
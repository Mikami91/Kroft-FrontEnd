// Store
import store from '../../store';
// Action types
import { SNACKBAR_SHOW } from '../actionsTypes';


export const snackbar_show = (payload) => {
  return {
    type: SNACKBAR_SHOW,
    payload: payload
  };
}
export const snackbar = (payload) => store.dispatch(snackbar_show(payload));
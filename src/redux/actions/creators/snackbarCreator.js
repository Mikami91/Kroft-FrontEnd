// Store
import store from '../../store';
// Action types
import { SNACKBAR_SHOW, SNACKBAR_HIDE } from '../actionsTypes';


export const show_snackbar = (payload) => {
  return {
    type: SNACKBAR_SHOW,
    payload: payload
  };
}
export const showSnackbar = (payload) => store.dispatch(show_snackbar(payload));

export const successSnackbar = (message) => store.dispatch(show_snackbar({
  show: true,
  message: message,
  severity: "success",
}));

export const infoSnackbar = (message) => store.dispatch(show_snackbar({
  show: true,
  message: message,
  severity: "info",
}));

export const warningSnackbar = (message) => store.dispatch(show_snackbar({
  show: true,
  message: message,
  severity: "warning",
}));

export const dangerSnackbar = (message) => store.dispatch(show_snackbar({
  show: true,
  message: message,
  severity: "danger",
}));

export const hide_snackbar = (payload) => {
  return {
    type: SNACKBAR_HIDE,
  };
}
export const hideSnackbar = () => store.dispatch(hide_snackbar());
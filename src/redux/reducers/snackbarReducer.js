// Action types
import { SNACKBAR_SHOW, SNACKBAR_HIDE } from '../actions/actionsTypes';

// Default State
const snackbarState = {
  show: false,
  message: "",
  severity: "default",
};

export function snackbarReducer(state = snackbarState, action) {

  switch (action.type) {
    case SNACKBAR_SHOW:
      return {
        ...state,
        show: action.payload.show,
        message: action.payload.message,
        severity: action.payload.severity,
      };

    case SNACKBAR_HIDE:
      return {
        ...state,
        show: false,
        message: "",
        // severity: "default",
      };

    default:
      return state;
  };
};
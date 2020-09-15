// Action types
import { SNACKBAR_SHOW } from '../actions/actionsTypes';

// Default State
const snackbarState = {
  show: false,
  message: "",
  severity: "default",
};

export function snackbarReducer(state = snackbarState, action) {

  console.log(action);

  switch (action.type) {
    case SNACKBAR_SHOW:
      return {
        ...state,
        show: action.payload.show,
        message: action.payload.message,
        severity: action.payload.severity,
      };

    default:
      return state;
  };
};
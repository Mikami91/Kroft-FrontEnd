// Action types
import { ADMIN_LIST, ADMIN_LOADING } from '../actions/actionsTypes';

// Default State
const adminState = {
  payload: [],
  loading: false,
};

export function adminReducer(state = adminState, action) {

  switch (action.type) {
    case ADMIN_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case ADMIN_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
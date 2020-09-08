// Action types
import { SUPER_ADMIN_LIST, SUPER_ADMIN_FETCHING, SUPER_ADMIN_LOADING } from '../actions/actionsTypes';

// Default State
const superAdminState = {
  payload: [],
  loading: false,
};

export function superAdminReducer(state = superAdminState, action) {

  switch (action.type) {
    case SUPER_ADMIN_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case SUPER_ADMIN_FETCHING:
      return {
        ...state,
        loading: action.value
      };

    case SUPER_ADMIN_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
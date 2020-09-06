// Action types
import { ROL_LIST, ROL_FETCHING, ROL_LOADING } from '../actions/actionsTypes';

// Default State
const rolState = {
  payload: [],
  fetching: false,
  loading: false,
};

export function rolReducer(state = rolState, action) {

  switch (action.type) {
    case ROL_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case ROL_FETCHING:
      return {
        ...state,
        fetching: action.value
      };

    case ROL_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
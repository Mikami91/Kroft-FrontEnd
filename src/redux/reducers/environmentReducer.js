// Action types
import { ENVIRONMENT_LIST, ENVIRONMENT_FETCHING, ENVIRONMENT_LOADING } from '../actions/actionsTypes';

// Default State
const environmentState = {
  payload: [],
  fetching: false,
  loading: false,
};

export function environmentReducer(state = environmentState, action) {

  switch (action.type) {
    case ENVIRONMENT_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case ENVIRONMENT_FETCHING:
      return {
        ...state,
        fetching: action.value
      };

    case ENVIRONMENT_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
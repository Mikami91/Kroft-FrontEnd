// Action types
import { ENVIRONMENT_LIST, ENVIRONMENT_LOADING } from '../actions/actionsTypes';

// Default State
const environmentState = {
  payload: [],
  loading: false,
};

export function environmentReducer(state = environmentState, action) {

  switch (action.type) {
    case ENVIRONMENT_LIST:
      return {
        ...state,
        payload: action.payload
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
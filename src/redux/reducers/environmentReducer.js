// Action types
import { ENVIRONMENT_LIST } from '../actions/actionsTypes';

// Default State
const environmentState = {
  payload: [],
};

export function environmentReducer(state = environmentState, action) {

  switch (action.type) {
    case ENVIRONMENT_LIST:
      return {
        ...state,
        payload: action.payload
      };

    default:
      return state;
  };
};
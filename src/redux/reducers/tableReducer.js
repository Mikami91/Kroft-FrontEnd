// Action types
import { TABLE_LIST } from '../actions/actionsTypes';

// Default State
const tableState = {
  payload: [],
};

export function tableReducer(state = tableState, action) {

  switch (action.type) {
    case TABLE_LIST:
      return {
        ...state,
        payload: action.payload
      };

    default:
      return state;
  };
};
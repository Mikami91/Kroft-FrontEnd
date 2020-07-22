// Action types
import { TABLE_LIST, TABLE_LOADING } from '../actions/actionsTypes';

// Default State
const tableState = {
  payload: [],
  loading: false,
};

export function tableReducer(state = tableState, action) {

  switch (action.type) {
    case TABLE_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case TABLE_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
// Action types
import { TABLE_LIST, TABLE_FETCHING, TABLE_LOADING } from '../actions/actionsTypes';

// Default State
const tableState = {
  payload: [],
  fetching: false,
  loading: false,
};

export function tableReducer(state = tableState, action) {

  switch (action.type) {
    case TABLE_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case TABLE_FETCHING:
      return {
        ...state,
        fetching: action.value
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
// Action types
import { COLLECT_LIST, COLLECT_LOADING } from '../actions/actionsTypes';

// Default State
const collectState = {
  payload: [],
  orders_detail: [],
  loading: false,
};

export function collectReducer(state = collectState, action) {

  switch (action.type) {
    case COLLECT_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case COLLECT_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
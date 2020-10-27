// Action types
import { BOX_LIST, BOX_FETCHING, BOX_LOADING } from '../actions/actionsTypes';

// Default State
const boxState = {
  payload: [],
  fetching: false,
  loading: false,
};

export function boxReducer(state = boxState, action) {

  switch (action.type) {
    case BOX_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case BOX_FETCHING:
      return {
        ...state,
        fetching: action.value
      };

    case BOX_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
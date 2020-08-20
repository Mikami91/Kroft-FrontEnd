// Action types
import { CATEGORY_LIST, CATEGORY_FETCHING, CATEGORY_LOADING } from '../actions/actionsTypes';

// Default State
const categoryState = {
  payload: [],
  fetching: false,
  loading: false,
};

export function categoryReducer(state = categoryState, action) {

  switch (action.type) {
    case CATEGORY_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case CATEGORY_FETCHING:
      return {
        ...state,
        fetching: action.value
      };

    case CATEGORY_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
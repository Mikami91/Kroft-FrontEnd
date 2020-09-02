// Action types
import { PRINT_CATEGORY_LIST, PRINT_CATEGORY_FETCHING, PRINT_CATEGORY_LOADING } from '../actions/actionsTypes';

// Default State
const printCategoryState = {
  payload: [],
  fetching: false,
  loading: false,
};

export function printCategoryReducer(state = printCategoryState, action) {

  switch (action.type) {
    case PRINT_CATEGORY_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case PRINT_CATEGORY_FETCHING:
      return {
        ...state,
        fetching: action.value
      };

    case PRINT_CATEGORY_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
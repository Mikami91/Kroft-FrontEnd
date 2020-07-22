// Action types
import { SUB_CATEGORY_LIST, SUB_CATEGORY_LOADING } from '../actions/actionsTypes';

// Default State
const subcategoryState = {
  payload: [],
  loading: false,
};

export function subcategoryReducer(state = subcategoryState, action) {

  switch (action.type) {
    case SUB_CATEGORY_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case SUB_CATEGORY_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
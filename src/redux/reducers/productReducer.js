// Action types
import { PRODUCT_LIST, PRODUCT_LOADING } from '../actions/actionsTypes';

// Default State
const productState = {
  payload: [],
  loading: false,
};

export function productReducer(state = productState, action) {

  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case PRODUCT_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
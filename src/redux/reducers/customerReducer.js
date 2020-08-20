// Action types
import { CUSTOMER_LIST, CUSTOMER_FETCHING, CUSTOMER_LOADING } from '../actions/actionsTypes';

// Default State
const customerState = {
  payload: [],
  fetching: false,
  loading: false,
};

export function customerReducer(state = customerState, action) {

  switch (action.type) {
    case CUSTOMER_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case CUSTOMER_FETCHING:
      return {
        ...state,
        fetching: action.value
      };

    case CUSTOMER_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
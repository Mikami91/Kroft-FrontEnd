// Action types
import {
  SUPPLIER_LIST,
  SUPPLIER_FETCHING,
  SUPPLIER_LOADING
} from '../actions/actionsTypes';

// Default State
const supplierState = {
  payload: [],
  fetching: false,
  loading: false,
};

export function supplierReducer(state = supplierState, action) {

  switch (action.type) {
    case SUPPLIER_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case SUPPLIER_FETCHING:
      return {
        ...state,
        fetching: action.value
      };

    case SUPPLIER_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
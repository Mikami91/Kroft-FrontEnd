// Action types
import {
  COLLECT_LIST,
  COLLECT_GLOBAL,
  COLLECT_EMPLOYEE,
  COLLECT_CASHIER,
  COLLECT_WAITER,
  COLLECT_ENV,
  COLLECT_TABLE,
  COLLECT_FETCHING,
  COLLECT_LOADING,
} from '../actions/actionsTypes';

// Default State
const collectState = {
  payload: [],
  global: [],
  employee: [],
  cashier: [],
  waiter: [],
  env: [],
  table: [],
  fetching: false,
  loading: false,
};

export function collectReducer(state = collectState, action) {

  switch (action.type) {

    case COLLECT_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case COLLECT_GLOBAL:
      return {
        ...state,
        global: action.payload
      };

    case COLLECT_EMPLOYEE:
      return {
        ...state,
        employee: action.payload
      };

    case COLLECT_CASHIER:
      return {
        ...state,
        cashier: action.payload
      };

    case COLLECT_WAITER:
      return {
        ...state,
        waiter: action.payload
      };

    case COLLECT_ENV:
      return {
        ...state,
        env: action.payload
      };

    case COLLECT_TABLE:
      return {
        ...state,
        table: action.payload
      };

    case COLLECT_FETCHING:
      return {
        ...state,
        fetching: action.value
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
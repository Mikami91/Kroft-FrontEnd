// Action types
import { EMPLOYEE_DATA, EMPLOYEE_FETCHING, EMPLOYEE_LOADING } from '../actions/actionsTypes';

// Default State
const employeeState = {
  payload: [],
  fetching: false,
  loading: false,
};

export function employeeReducer(state = employeeState, action) {

  switch (action.type) {
    case EMPLOYEE_DATA:
      return {
        ...state,
        payload: action.payload
      };

    case EMPLOYEE_FETCHING:
      return {
        ...state,
        fetching: action.value
      };

    case EMPLOYEE_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
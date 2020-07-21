// Action types
import { EMPLOYEE_DATA } from '../actions/actionsTypes';

// Default State
const employeeState = {
  payload: [],
};

export function employeeReducer(state = employeeState, action) {

  switch (action.type) {
    case EMPLOYEE_DATA:
      return {
        ...state,
        payload: action.payload
      };

    default:
      return state;
  };
};
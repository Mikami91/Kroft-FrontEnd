// Action types
import { EMPLOYEE_DATA } from '../actionsTypes';


// Change User State
export const employeeData = (payload) => {
  return {
    type: EMPLOYEE_DATA,
    payload: payload
  };
}
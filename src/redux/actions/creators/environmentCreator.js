// Action types
import { ENVIRONMENT_LIST } from '../actionsTypes';


// Change User State
export const environmentList = (payload) => {
  return {
    type: ENVIRONMENT_LIST,
    payload: payload
  };
}
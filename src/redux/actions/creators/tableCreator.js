// Action types
import { TABLE_LIST } from '../actionsTypes';


// Change User State
export const tableList = (payload) => {
  return {
    type: TABLE_LIST,
    payload: payload
  };
}
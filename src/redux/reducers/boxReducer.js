// Action types
import {
  BOX_LIST,
  BOX_OPEN,
  BOX_CLOSED,
  BOX_FETCHING,
  BOX_LOADING,
} from "../actions/actionsTypes";

// Default State
const boxState = {
  payload: [],
  box_opening: [],
  closed_boxes: [],
  fetching: false,
  loading: false,
};

export function boxReducer(state = boxState, action) {
  switch (action.type) {
    case BOX_LIST:
      return {
        ...state,
        payload: action.payload,
      };

    case BOX_OPEN:
      return {
        ...state,
        box_opening: action.payload.filter((index) => index.state === 1),
      };

    case BOX_CLOSED:
      return {
        ...state,
        closed_boxes: action.payload.filter((index) => index.state === 0),
      };

    case BOX_FETCHING:
      return {
        ...state,
        fetching: action.value,
      };

    case BOX_LOADING:
      return {
        ...state,
        loading: action.value,
      };

    default:
      return state;
  }
}

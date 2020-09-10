// Action types
import { COMPANY_LIST, COMPANY_FETCHING, COMPANY_LOADING } from '../actions/actionsTypes';

// Default State
const companyState = {
  payload: {},
  fetching: false,
  loading: false,
};

export function companyReducer(state = companyState, action) {

  switch (action.type) {
    case COMPANY_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case COMPANY_FETCHING:
      return {
        ...state,
        fetching: action.value
      };

    case COMPANY_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
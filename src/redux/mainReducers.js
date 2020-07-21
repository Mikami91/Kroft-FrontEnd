// Dependencies
import { combineReducers } from 'redux';
// Reducers
import { employeeReducer } from './reducers/employeeReducer';
import { environmentReducer } from './reducers/environmentReducer';
import { tableReducer } from './reducers/tableReducer';

// Combine Reducer
export const mainReducer = combineReducers({
    employee: employeeReducer,
    environment: environmentReducer,
    table: tableReducer,
  });

/*export default function mainReducer(state = {}, action) {
  return {
    quotes: quoteReducer(state.quotes, action),
    theme: themeReducer(state.theme, action)
  };
}*/ 
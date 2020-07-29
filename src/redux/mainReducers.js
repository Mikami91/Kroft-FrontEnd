// Dependencies
import { combineReducers } from 'redux';
// Reducers
import { employeeReducer } from './reducers/employeeReducer';
import { environmentReducer } from './reducers/environmentReducer';
import { tableReducer } from './reducers/tableReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { subcategoryReducer } from './reducers/subcategoryReducer';
import { productReducer } from './reducers/productReducer';
import { orderReducer } from './reducers/orderReducer';

// Combine Reducer
export const mainReducer = combineReducers({
    employee: employeeReducer,
    environment: environmentReducer,
    table: tableReducer,
    category: categoryReducer,
    subcategory: subcategoryReducer,
    product: productReducer,
    orders: orderReducer,
  });

/*export default function mainReducer(state = {}, action) {
  return {
    quotes: quoteReducer(state.quotes, action),
    theme: themeReducer(state.theme, action)
  };
}*/ 
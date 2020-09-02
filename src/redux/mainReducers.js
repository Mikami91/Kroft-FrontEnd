// Dependencies
import { combineReducers } from 'redux';
// Reducers
import { adminReducer } from './reducers/adminReducer';
import { employeeReducer } from './reducers/employeeReducer';
import { environmentReducer } from './reducers/environmentReducer';
import { tableReducer } from './reducers/tableReducer';
import { printCategoryReducer } from './reducers/printCategoryReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { subcategoryReducer } from './reducers/subcategoryReducer';
import { productReducer } from './reducers/productReducer';
import { supplierReducer } from './reducers/supplierReducer';
import { customerReducer } from './reducers/customerReducer';
import { orderReducer } from './reducers/orderReducer';
import { collectReducer } from './reducers/collectReducer';

// Combine Reducer
export const mainReducer = combineReducers({
  admin: adminReducer,
  employee: employeeReducer,
  environment: environmentReducer,
  table: tableReducer,
  printcategory: printCategoryReducer,
  category: categoryReducer,
  subcategory: subcategoryReducer,
  product: productReducer,
  customer: customerReducer,
  supplier: supplierReducer,
  orders: orderReducer,
  collects: collectReducer,
});

/*export default function mainReducer(state = {}, action) {
  return {
    quotes: quoteReducer(state.quotes, action),
    theme: themeReducer(state.theme, action)
  };
}*/
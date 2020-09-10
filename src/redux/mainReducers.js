// Dependencies
import { combineReducers } from 'redux';
// Reducers
import { superAdminReducer } from './reducers/superAdminReducer';
import { companyReducer } from './reducers/companyReducer';
import { adminReducer } from './reducers/adminReducer';
import { rolReducer } from './reducers/rolReducer';
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
import { paymentReducer } from './reducers/paymentReducer';
import { collectReducer } from './reducers/collectReducer';

// Combine Reducer
export const mainReducer = combineReducers({
  superadmin: superAdminReducer,
  company: companyReducer,
  admin: adminReducer,
  rol: rolReducer, 
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
  payments: paymentReducer,
  collects: collectReducer,
});

/*export default function mainReducer(state = {}, action) {
  return {
    quotes: quoteReducer(state.quotes, action),
    theme: themeReducer(state.theme, action)
  };
}*/
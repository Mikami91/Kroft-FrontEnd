// Action types
import { PRODUCT_LIST, SET_TABLES, PRODUCT_ORDERS, PRODUCT_LOADING } from '../actions/actionsTypes';
import { quantity } from 'chartist';

// Default State
const productState = {
  payload: [],
  orders: [],
  current: {
    environment_id: null,
    table_id: null,
  },
  loading: false,
};

// variables to return
let exist = false;
let index = null;
// Check is exist function
const is_exist = (array_to_search, value_to_check, value_to_find) => {
  // Search...
  for (let i = 0; i < array_to_search.length; i++) {
    if (array_to_search[i][value_to_check] === value_to_find) {
      exist = true;
      index = i;
      return {
        exist: exist,
        index: index,
      };
    }
  };
};

export function productReducer(state = productState, action) {

  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case SET_TABLES:
      // Check if Environment ID exist
      if (typeof is_exist(state.orders, 'environment_id', action.payload.environment_id) !== "undefined") {
        if (exist === true) {
          // Copy initial state and update current object
          let newState = {
            ...state,
            current: {
              environment_id: action.payload.environment_id,
              table_id: action.payload.id,
            }
          };
          // Find value want to update
          let array = newState.orders[index].tables;
          // Check if Table ID exist
          let is_exist_table = array.findIndex(i => i.table_id === action.payload.id);
          // If not exist
          if (is_exist_table === -1) {
            // Push array in to new state
            array.push({
              // Add Table info
              table_id: action.payload.id,
              table_name: action.payload.name,
              table_is_busy: action.payload.is_busy,
              table_number: action.payload.number,
              table_amount: action.payload.amount,
              global_quantity: 0,
              // Add products array
              products: [],
            });
            // Return updated state
            return newState;
          }
          // If exist
          else return {
            // Return initial state with current object update
            ...state,
            current: {
              environment_id: action.payload.environment_id,
              table_id: action.payload.id,
            }
          };
        }
      }
      // If not exist
      return {
        ...state,
        current: {
          environment_id: action.payload.environment_id,
          table_id: action.payload.id,
        },
        orders: [
          ...state.orders,
          {
            // Add Environment info
            environment_id: action.payload.environment_id,
            environment_name: action.payload.environment_name,

            tables: [
              {
                // Add Table info
                table_id: action.payload.id,
                table_name: action.payload.name,
                table_is_busy: action.payload.is_busy,
                table_number: action.payload.number,
                table_amount: action.payload.amount,
                global_quantity: 0,
                // Add products array
                products: [],
              }
            ]
          }
        ]
      };

    case PRODUCT_ORDERS:
      // Catch index Enrironment
      let environment = is_exist(state.orders, 'environment_id', action.payload.environment_id);
      // Catch index Table
      let table = is_exist(state.orders[environment.index].tables, 'table_id', action.payload.table_id);

      console.log(environment);
      console.log(table);

      // Copy initial state
      let newState = { ...state };
      // Find value want to update
      let array = newState.orders[environment.index].tables[table.index].products;
      // Plus global quantity
      newState.orders[environment.index].tables[table.index].global_quantity += 1;
      // Check if Product ID exist
      let is_exist_product = array.findIndex(i => i.product_id === action.payload.id);
      // If not exist
      if (is_exist_product === -1) {
        // Push array in to new state
        array.push({
          // Add Product info
          product_id: action.payload.id,
          product_name: action.payload.name,
          product_price: action.payload.price,
          product_quantity: 1,
          print_category_id: action.payload.print_category_id,
          category_id: action.payload.category_id,
          sub_category_id: action.payload.sub_category_id,
        });
        // Return updated state
        return newState;
      } else {
        // If exist add quantity
        array[is_exist_product].product_quantity += 1;
        return newState
      }


    case PRODUCT_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
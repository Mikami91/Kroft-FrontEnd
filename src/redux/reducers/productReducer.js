// Action types
import { PRODUCT_LIST, OPEN_PRODUCTS, CLOSE_PRODUCTS, PRODUCT_ORDERS, MORE_QUANTITY, LESS_QUANTITY, PRODUCT_LOADING } from '../actions/actionsTypes';
import { quantity } from 'chartist';

// Default State
const productState = {
  payload: [],
  orders: [],
  current: {
    open: false,
    environment_id: null,
    table_id: null,
    env_index: null,
    table_index: null
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
        id: array_to_search[i][value_to_check]
      };
    }
  };
};

// Cath the last index from objects array
let env_index = -1;
const lastIndexOfEnv = (array, field, key) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index][field] === key) {
      return env_index = index;
    }
  }
  return -1;
};

let table_index = -1;
const lastIndexOfTable = (array, field, key) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index][field] === key) {
      return table_index = index;
    }
  }
  return -1;
};


export function productReducer(state = productState, action) {

  // Copy initial state
  let new_state = { ...state };

  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        payload: action.payload
      };

    case OPEN_PRODUCTS:
      // Check if Environment ID exist
      if (typeof is_exist(state.orders, 'environment_id', action.payload.environment_id) !== "undefined") {
        if (exist === true) {
          // Call new state and update current object
          new_state = {
            ...state,
            // Update the current values
            current: {
              open: true,
              environment_id: action.payload.environment_id,
              table_id: action.payload.id,
              env_index: lastIndexOfEnv(state.orders, 'environment_id', action.payload.environment_id),
              table_index: lastIndexOfTable(state.orders[env_index].tables, 'table_id', action.payload.id),
            }
          };
          // Find value want to update
          let array = new_state.orders[index].tables;
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
            return {
              ...new_state,
              // Update the current values
              current: {
                open: true,
                environment_id: action.payload.environment_id,
                table_id: action.payload.id,
                env_index: lastIndexOfEnv(state.orders, 'environment_id', action.payload.environment_id),
                table_index: lastIndexOfTable(state.orders[env_index].tables, 'table_id', action.payload.id),
              }
            };
          }
          // If exist
          else return {
            // Return initial state
            ...state,
            // Update the current values
            current: {
              open: true,
              environment_id: action.payload.environment_id,
              table_id: action.payload.id,
              env_index: lastIndexOfEnv(state.orders, 'environment_id', action.payload.environment_id),
              table_index: lastIndexOfTable(state.orders[env_index].tables, 'table_id', action.payload.id),
            }
          };
        }
      }
      // If not exist

      // Call new state
      new_state.orders.push({
        // Add Environment info
        environment_id: action.payload.environment_id,
        environment_name: action.payload.environment_name,
        // Add tables array
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
      });

      return {
        ...state,
        // Update the current values
        current: {
          open: true,
          environment_id: action.payload.environment_id,
          table_id: action.payload.id,
          env_index: lastIndexOfEnv(state.orders, 'environment_id', action.payload.environment_id),
          table_index: lastIndexOfTable(state.orders[env_index].tables, 'table_id', action.payload.id),
        },
      };

    case CLOSE_PRODUCTS:

      return {
        ...state,
        current: {
          open: false,
          environment_id: null,
          table_id: null,
          env_index: null,
          table_index: null
        }
      };

    case PRODUCT_ORDERS:

      // Find value want to update
      let array = new_state.orders[env_index].tables[table_index].products;
      // Plus global quantity
      new_state.orders[env_index].tables[table_index].global_quantity += 1;
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
          environment_id: state.current.environment_id,
          table_id: state.current.table_id,
        });
        // Return updated state
        return new_state;
      } else {
        // If exist add quantity to current product
        array[is_exist_product].product_quantity += 1;
        return new_state
      }

    case MORE_QUANTITY:

      // Add to global quantity
      new_state.orders[env_index].tables[table_index].global_quantity += 1;

      let product_array1 = new_state.orders[env_index].tables[table_index].products;
      let current_product1 = product_array1.findIndex(i => i.product_id === action.payload.product_id);
      // Add quantity
      product_array1[current_product1].product_quantity += 1;
      // Return update state
      return new_state;

    case LESS_QUANTITY:

      let product_array2 = new_state.orders[env_index].tables[table_index].products;
      let current_product2 = product_array2.findIndex(i => i.product_id === action.payload.product_id);
      // Rest quantity
      if (product_array2[current_product2].product_quantity > 1) {
        product_array2[current_product2].product_quantity -= 1;
        // Rest to global quantity
        new_state.orders[env_index].tables[table_index].global_quantity -= 1;
      }
      // Return update state
      return new_state;

    case PRODUCT_LOADING:
      return {
        ...state,
        loading: action.value
      };

    default:
      return state;
  };
};
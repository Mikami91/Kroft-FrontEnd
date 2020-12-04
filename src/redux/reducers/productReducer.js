// Action types
import {
  PRODUCT_LIST,
  OPEN_PRODUCTS,
  CLOSE_PRODUCTS,
  PRODUCT_ORDERS,
  MORE_QUANTITY,
  LESS_QUANTITY,
  REMOVE_PRODUCT,
  ADD_OBSERVATION,
  DELETE_OBSERVATION,
  DELETE_ORDERS,
  PRODUCT_FETCHING,
  PRODUCT_LOADING,
} from "../actions/actionsTypes";

// Default State
const productState = {
  payload: [],
  orders: [],
  current: {
    open: false,
    environment_id: null,
    environment_name: null,
    table_id: null,
    table_name: null,
    table_number: null,
    env_index: null,
    table_index: null,
    global_quantity: 0,
    global_amount: 0,
  },
  fetching: false,
  loading: false,
};

// variables to return
let exist = false;
let index = null;
// Check is exist function
const is_exist = (array_to_search, value_to_find) => {
  // Search...
  for (let i = 0; i < array_to_search.length; i++) {
    if (array_to_search[i].environment_id === value_to_find) {
      exist = true;
      index = i;
      return {
        exist: exist,
        index: index,
        id: array_to_search[i].environment_id,
      };
    }
  }
};

// Cath the last index from objects array
let env_index = -1;
const lastIndexOfEnv = (array, key) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index].environment_id === key) {
      return (env_index = index);
    }
  }
  return -1;
};

let table_index = -1;
const lastIndexOfTable = (array, key) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index].table_id === key) {
      return (table_index = index);
    }
  }
  return -1;
};

let global_amount = 0;
let global_amount_sum = (array) => {
  array.reduce(function (prev, current) {
    return (global_amount =
      prev + current.product_price * current.product_quantity);
  }, 0);
};

export function productReducer(state = productState, action) {
  // Find current location to update
  let location =
    env_index > -1 && table_index > -1
      ? state.orders[env_index].tables[table_index]
      : [];
  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        payload: action.payload,
      };

    case OPEN_PRODUCTS:
      let {
        environment_id,
        environment_name,
        id,
        name,
        number,
        is_busy,
        amount,
      } = action.payload;

      let orders = state.orders;

      // IF EXIST ENV ID
      if (typeof is_exist(orders, environment_id) !== "undefined") {
        // IF EXIST TABLE ID
        if (orders[env_index].tables.findIndex((i) => i.table_id === id) > -1) {
          return {
            ...state,
            current: {
              open: true,
              environment_id: environment_id,
              environment_name: environment_name,
              table_id: id,
              table_name: name,
              table_number: number,
              env_index: lastIndexOfEnv(orders, environment_id),
              table_index: lastIndexOfTable(orders[env_index].tables, id),
              global_quantity: 0,
              global_amount:
                orders[env_index].tables[table_index].global_amount,
            },
          };
        }
        orders[env_index].tables.push({
          table_id: id,
          table_name: name,
          table_is_busy: is_busy,
          table_number: number,
          table_amount: amount,
          global_quantity: 0,
          global_amount: 0,
          products: [],
        });
        return {
          ...state,
          current: {
            open: true,
            environment_id: environment_id,
            environment_name: environment_name,
            table_id: id,
            table_name: name,
            table_number: number,
            env_index: lastIndexOfEnv(orders, environment_id),
            table_index: lastIndexOfTable(orders[env_index].tables, id),
            global_quantity: 0,
            global_amount: orders[env_index].tables[table_index].global_amount,
          },
        };
      }
      // IF NOT EXIST ENV ID
      else {
        orders.push({
          environment_id: environment_id,
          environment_name: environment_name,
          tables: [
            {
              table_id: id,
              table_name: name,
              table_is_busy: is_busy,
              table_number: number,
              table_amount: amount,
              global_quantity: 0,
              global_amount: 0,
              products: [],
            },
          ],
        });
        return {
          ...state,
          current: {
            open: true,
            environment_id: environment_id,
            environment_name: environment_name,
            table_id: id,
            table_name: name,
            table_number: number,
            env_index: lastIndexOfEnv(orders, environment_id),
            table_index: lastIndexOfTable(orders[env_index].tables, id),
            global_quantity: 0,
            global_amount: orders[env_index].tables[table_index].global_amount,
          },
        };
      }

    case CLOSE_PRODUCTS:
      return {
        ...state,
        current: {
          open: false,
          environment_id: null,
          environment_name: null,
          table_id: null,
          table_name: null,
          table_number: null,
          env_index: null,
          table_index: null,
          global_quantity: 0,
        },
      };

    case PRODUCT_ORDERS:
      // Plus global quantity
      let current_quantity = (location.global_quantity += 1);
      // Check if Product ID exist in Products array
      let is_exist_product = location.products.findIndex(
        (i) => i.product_id === action.payload.id
      );
      // IF EXIST PRODUCT ID
      if (is_exist_product > -1) {
        location.products.find((i) =>
          i.product_id === action.payload.id ? (i.product_quantity += 1) : 0
        );
        // Sum global amount
        global_amount_sum(location.products);
        location.global_amount = global_amount;
        return {
          ...state,
          current: {
            ...state.current,
            global_quantity: current_quantity,
            global_amount: global_amount,
          },
        };
      }
      // IF NOT EXIST PRODUCT ID
      else {
        location.products.push({
          product_id: action.payload.id,
          product_name: action.payload.name,
          product_price: action.payload.price,
          product_quantity: 1,
          product_observation: "",
          print_category_id: action.payload.print_category_id,
          print_category_name: action.payload.print_category_name,
          category_id: action.payload.category_id,
          sub_category_id: action.payload.sub_category_id,
          environment_id: state.current.environment_id,
          table_id: state.current.table_id,
        });
        // Sum global amount
        global_amount_sum(location.products);
        location.global_amount = global_amount;

        return {
          ...state,
          current: {
            ...state.current,
            global_quantity: current_quantity,
            global_amount: global_amount,
          },
        };
      }

    case MORE_QUANTITY:
      // Add quantity
      location.products[
        location.products.findIndex(
          (i) => i.product_id === action.id.product_id
        )
      ].product_quantity += 1;
      // Sum global amount
      global_amount_sum(location.products);
      location.global_amount = global_amount;

      return {
        ...state,
        current: {
          ...state.current,
          global_quantity: (location.global_quantity += 1),
          global_amount: global_amount,
        },
      };

    case LESS_QUANTITY:
      if (
        location.products[
          location.products.findIndex(
            (i) => i.product_id === action.id.product_id
          )
        ].product_quantity > 1
      ) {
        // Rest quantity
        location.products[
          location.products.findIndex(
            (i) => i.product_id === action.id.product_id
          )
        ].product_quantity -= 1;
        // Sum global amount
        global_amount_sum(location.products);
        location.global_amount = global_amount;

        return {
          ...state,
          current: {
            ...state.current,
            global_quantity: (location.global_quantity -= 1),
            global_amount: global_amount,
          },
        };
      }
      return state;

    case REMOVE_PRODUCT:
      let remove = location.products.find(
        (i) => i.product_id === action.id.product_id
      );
      // Remove Product from Orders array
      location.products.splice(
        location.products.findIndex(
          (i) => i.product_id === action.id.product_id
        ),
        1
      );
      // Sum global amount
      global_amount_sum(location.products);
      location.global_amount =
        location.products.length === 0 ? 0 : global_amount;

      return {
        ...state,
        current: {
          ...state.current,
          global_quantity: (location.global_quantity -=
            remove.product_quantity),
          global_amount: location.products.length === 0 ? 0 : global_amount,
        },
      };

    case ADD_OBSERVATION:
      // Add observation
      location.products[
        location.products.findIndex(
          (i) => i.product_id === action.payload.product_id
        )
      ].product_observation = action.payload.observation;

      return state;

    case DELETE_OBSERVATION:
      // Add observation
      location.products[
        location.products.findIndex(
          (i) => i.product_id === action.payload.product_id
        )
      ].product_observation = "";

      return state;

    case DELETE_ORDERS:
      // Remove all Products
      location.products = [];
      location.global_quantity = 0;
      location.global_amount = 0;

      return {
        ...state,
        current: {
          ...state.current,
          global_quantity: 0,
          global_amount: 0,
        },
      };

    case PRODUCT_FETCHING:
      return {
        ...state,
        fetching: action.value,
      };

    case PRODUCT_LOADING:
      return {
        ...state,
        loading: action.value,
      };

    default:
      return state;
  }
}

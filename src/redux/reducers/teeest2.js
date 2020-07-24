// Action types
import { PRODUCT_LIST, PRODUCT_ORDERS, PRODUCT_LOADING } from '../actions/actionsTypes';

// Default State
const productState = {
  payload: [],
  orders: [],
  loading: false,
};

export function productReducer(state = productState, action) {

  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        payload: action.payload
      };





    case PRODUCT_ORDERS:

      // Check is exist function
      // Way 1
      // const is_exist = (array_to_search, value_to_check, value_to_find) => array_to_search.some(index => index[value_to_check] === value_to_find);

      // Way 2: optimize

      // variables to return
      let exist = false;
      let index = null;
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

      // console.log(is_exist(state.orders, 'environment_id', action.payload.environment_id));
      // console.log(state.orders[index]);

      // If Environment ID exist
      if (typeof is_exist(state.orders, 'environment_id', action.payload.environment_id) !== "undefined") {

        if (exist === true) {

          let array = state.orders[index].tables;
          var is_exist_table = array.findIndex(i => i.table_id === action.payload.id)
          // here you can check specific property for an object whether it exist in your array or not

          if (is_exist_table === -1) {
            array.push({
              // Add Table info
              table_id: action.payload.id,
              table_name: action.payload.name,
              table_number: action.payload.number,
              // Add products array
              products: [],
            });
          }

          else return state;

        }

      } else {

        console.log("no exist");

        return {
          ...state,
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
                  table_number: action.payload.number,
                  // Add products array
                  products: [],
                }
              ]
            }
          ]
        };
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